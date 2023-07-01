# `azurerm_hdinsight_kafka_cluster`

Refer to the Terraform Registory for docs: [`azurerm_hdinsight_kafka_cluster`](https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster).

# `hdinsightKafkaCluster` Submodule <a name="`hdinsightKafkaCluster` Submodule" id="@cdktf/provider-azurerm.hdinsightKafkaCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HdinsightKafkaCluster <a name="HdinsightKafkaCluster" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster azurerm_hdinsight_kafka_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer"></a>

```typescript
import { hdinsightKafkaCluster } from '@cdktf/provider-azurerm'

new hdinsightKafkaCluster.HdinsightKafkaCluster(scope: Construct, id: string, config: HdinsightKafkaClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig">HdinsightKafkaClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig">HdinsightKafkaClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putComponentVersion">putComponentVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putComputeIsolation">putComputeIsolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putDiskEncryption">putDiskEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putExtension">putExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putGateway">putGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putMetastores">putMetastores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putMonitor">putMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putNetwork">putNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putRestProxy">putRestProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putRoles">putRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putSecurityProfile">putSecurityProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putStorageAccount">putStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putStorageAccountGen2">putStorageAccountGen2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetComputeIsolation">resetComputeIsolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetDiskEncryption">resetDiskEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetEncryptionInTransitEnabled">resetEncryptionInTransitEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetExtension">resetExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetMetastores">resetMetastores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetMonitor">resetMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetRestProxy">resetRestProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetSecurityProfile">resetSecurityProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetStorageAccount">resetStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetStorageAccountGen2">resetStorageAccountGen2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetTlsMinVersion">resetTlsMinVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putComponentVersion` <a name="putComponentVersion" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putComponentVersion"></a>

```typescript
public putComponentVersion(value: HdinsightKafkaClusterComponentVersion): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putComponentVersion.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersion">HdinsightKafkaClusterComponentVersion</a>

---

##### `putComputeIsolation` <a name="putComputeIsolation" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putComputeIsolation"></a>

```typescript
public putComputeIsolation(value: HdinsightKafkaClusterComputeIsolation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putComputeIsolation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolation">HdinsightKafkaClusterComputeIsolation</a>

---

##### `putDiskEncryption` <a name="putDiskEncryption" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putDiskEncryption"></a>

```typescript
public putDiskEncryption(value: IResolvable | HdinsightKafkaClusterDiskEncryption[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putDiskEncryption.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption">HdinsightKafkaClusterDiskEncryption</a>[]

---

##### `putExtension` <a name="putExtension" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putExtension"></a>

```typescript
public putExtension(value: HdinsightKafkaClusterExtension): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putExtension.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtension">HdinsightKafkaClusterExtension</a>

---

##### `putGateway` <a name="putGateway" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putGateway"></a>

```typescript
public putGateway(value: HdinsightKafkaClusterGateway): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putGateway.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGateway">HdinsightKafkaClusterGateway</a>

---

##### `putMetastores` <a name="putMetastores" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putMetastores"></a>

```typescript
public putMetastores(value: HdinsightKafkaClusterMetastores): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putMetastores.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores">HdinsightKafkaClusterMetastores</a>

---

##### `putMonitor` <a name="putMonitor" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putMonitor"></a>

```typescript
public putMonitor(value: HdinsightKafkaClusterMonitor): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putMonitor.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitor">HdinsightKafkaClusterMonitor</a>

---

##### `putNetwork` <a name="putNetwork" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putNetwork"></a>

```typescript
public putNetwork(value: HdinsightKafkaClusterNetwork): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetwork">HdinsightKafkaClusterNetwork</a>

---

##### `putRestProxy` <a name="putRestProxy" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putRestProxy"></a>

```typescript
public putRestProxy(value: HdinsightKafkaClusterRestProxy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putRestProxy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxy">HdinsightKafkaClusterRestProxy</a>

---

##### `putRoles` <a name="putRoles" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putRoles"></a>

```typescript
public putRoles(value: HdinsightKafkaClusterRoles): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putRoles.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles">HdinsightKafkaClusterRoles</a>

---

##### `putSecurityProfile` <a name="putSecurityProfile" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putSecurityProfile"></a>

```typescript
public putSecurityProfile(value: HdinsightKafkaClusterSecurityProfile): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putSecurityProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile">HdinsightKafkaClusterSecurityProfile</a>

---

##### `putStorageAccount` <a name="putStorageAccount" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putStorageAccount"></a>

```typescript
public putStorageAccount(value: IResolvable | HdinsightKafkaClusterStorageAccount[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putStorageAccount.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount">HdinsightKafkaClusterStorageAccount</a>[]

---

##### `putStorageAccountGen2` <a name="putStorageAccountGen2" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putStorageAccountGen2"></a>

```typescript
public putStorageAccountGen2(value: HdinsightKafkaClusterStorageAccountGen2): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putStorageAccountGen2.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2">HdinsightKafkaClusterStorageAccountGen2</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putTimeouts"></a>

```typescript
public putTimeouts(value: HdinsightKafkaClusterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts">HdinsightKafkaClusterTimeouts</a>

---

##### `resetComputeIsolation` <a name="resetComputeIsolation" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetComputeIsolation"></a>

```typescript
public resetComputeIsolation(): void
```

##### `resetDiskEncryption` <a name="resetDiskEncryption" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetDiskEncryption"></a>

```typescript
public resetDiskEncryption(): void
```

##### `resetEncryptionInTransitEnabled` <a name="resetEncryptionInTransitEnabled" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetEncryptionInTransitEnabled"></a>

```typescript
public resetEncryptionInTransitEnabled(): void
```

##### `resetExtension` <a name="resetExtension" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetExtension"></a>

```typescript
public resetExtension(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMetastores` <a name="resetMetastores" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetMetastores"></a>

```typescript
public resetMetastores(): void
```

##### `resetMonitor` <a name="resetMonitor" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetMonitor"></a>

```typescript
public resetMonitor(): void
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetRestProxy` <a name="resetRestProxy" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetRestProxy"></a>

```typescript
public resetRestProxy(): void
```

##### `resetSecurityProfile` <a name="resetSecurityProfile" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetSecurityProfile"></a>

```typescript
public resetSecurityProfile(): void
```

##### `resetStorageAccount` <a name="resetStorageAccount" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetStorageAccount"></a>

```typescript
public resetStorageAccount(): void
```

##### `resetStorageAccountGen2` <a name="resetStorageAccountGen2" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetStorageAccountGen2"></a>

```typescript
public resetStorageAccountGen2(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTlsMinVersion` <a name="resetTlsMinVersion" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetTlsMinVersion"></a>

```typescript
public resetTlsMinVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.isConstruct"></a>

```typescript
import { hdinsightKafkaCluster } from '@cdktf/provider-azurerm'

hdinsightKafkaCluster.HdinsightKafkaCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.isTerraformElement"></a>

```typescript
import { hdinsightKafkaCluster } from '@cdktf/provider-azurerm'

hdinsightKafkaCluster.HdinsightKafkaCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.isTerraformResource"></a>

```typescript
import { hdinsightKafkaCluster } from '@cdktf/provider-azurerm'

hdinsightKafkaCluster.HdinsightKafkaCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.componentVersion">componentVersion</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference">HdinsightKafkaClusterComponentVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.computeIsolation">computeIsolation</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference">HdinsightKafkaClusterComputeIsolationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.diskEncryption">diskEncryption</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList">HdinsightKafkaClusterDiskEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.extension">extension</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference">HdinsightKafkaClusterExtensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.gateway">gateway</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference">HdinsightKafkaClusterGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.httpsEndpoint">httpsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.kafkaRestProxyEndpoint">kafkaRestProxyEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.metastores">metastores</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference">HdinsightKafkaClusterMetastoresOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.monitor">monitor</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference">HdinsightKafkaClusterMonitorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.network">network</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference">HdinsightKafkaClusterNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.restProxy">restProxy</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference">HdinsightKafkaClusterRestProxyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.roles">roles</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference">HdinsightKafkaClusterRolesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.securityProfile">securityProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference">HdinsightKafkaClusterSecurityProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.sshEndpoint">sshEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.storageAccount">storageAccount</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList">HdinsightKafkaClusterStorageAccountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.storageAccountGen2">storageAccountGen2</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference">HdinsightKafkaClusterStorageAccountGen2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference">HdinsightKafkaClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.clusterVersionInput">clusterVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.componentVersionInput">componentVersionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersion">HdinsightKafkaClusterComponentVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.computeIsolationInput">computeIsolationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolation">HdinsightKafkaClusterComputeIsolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.diskEncryptionInput">diskEncryptionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption">HdinsightKafkaClusterDiskEncryption</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.encryptionInTransitEnabledInput">encryptionInTransitEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.extensionInput">extensionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtension">HdinsightKafkaClusterExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.gatewayInput">gatewayInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGateway">HdinsightKafkaClusterGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.metastoresInput">metastoresInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores">HdinsightKafkaClusterMetastores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.monitorInput">monitorInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitor">HdinsightKafkaClusterMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.networkInput">networkInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetwork">HdinsightKafkaClusterNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.restProxyInput">restProxyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxy">HdinsightKafkaClusterRestProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.rolesInput">rolesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles">HdinsightKafkaClusterRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.securityProfileInput">securityProfileInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile">HdinsightKafkaClusterSecurityProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.storageAccountGen2Input">storageAccountGen2Input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2">HdinsightKafkaClusterStorageAccountGen2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.storageAccountInput">storageAccountInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount">HdinsightKafkaClusterStorageAccount</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.tierInput">tierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts">HdinsightKafkaClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.tlsMinVersionInput">tlsMinVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.clusterVersion">clusterVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.encryptionInTransitEnabled">encryptionInTransitEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.tier">tier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.tlsMinVersion">tlsMinVersion</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `componentVersion`<sup>Required</sup> <a name="componentVersion" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.componentVersion"></a>

```typescript
public readonly componentVersion: HdinsightKafkaClusterComponentVersionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference">HdinsightKafkaClusterComponentVersionOutputReference</a>

---

##### `computeIsolation`<sup>Required</sup> <a name="computeIsolation" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.computeIsolation"></a>

```typescript
public readonly computeIsolation: HdinsightKafkaClusterComputeIsolationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference">HdinsightKafkaClusterComputeIsolationOutputReference</a>

---

##### `diskEncryption`<sup>Required</sup> <a name="diskEncryption" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.diskEncryption"></a>

```typescript
public readonly diskEncryption: HdinsightKafkaClusterDiskEncryptionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList">HdinsightKafkaClusterDiskEncryptionList</a>

---

##### `extension`<sup>Required</sup> <a name="extension" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.extension"></a>

```typescript
public readonly extension: HdinsightKafkaClusterExtensionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference">HdinsightKafkaClusterExtensionOutputReference</a>

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.gateway"></a>

```typescript
public readonly gateway: HdinsightKafkaClusterGatewayOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference">HdinsightKafkaClusterGatewayOutputReference</a>

---

##### `httpsEndpoint`<sup>Required</sup> <a name="httpsEndpoint" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.httpsEndpoint"></a>

```typescript
public readonly httpsEndpoint: string;
```

- *Type:* string

---

##### `kafkaRestProxyEndpoint`<sup>Required</sup> <a name="kafkaRestProxyEndpoint" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.kafkaRestProxyEndpoint"></a>

```typescript
public readonly kafkaRestProxyEndpoint: string;
```

- *Type:* string

---

##### `metastores`<sup>Required</sup> <a name="metastores" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.metastores"></a>

```typescript
public readonly metastores: HdinsightKafkaClusterMetastoresOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference">HdinsightKafkaClusterMetastoresOutputReference</a>

---

##### `monitor`<sup>Required</sup> <a name="monitor" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.monitor"></a>

```typescript
public readonly monitor: HdinsightKafkaClusterMonitorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference">HdinsightKafkaClusterMonitorOutputReference</a>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.network"></a>

```typescript
public readonly network: HdinsightKafkaClusterNetworkOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference">HdinsightKafkaClusterNetworkOutputReference</a>

---

##### `restProxy`<sup>Required</sup> <a name="restProxy" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.restProxy"></a>

```typescript
public readonly restProxy: HdinsightKafkaClusterRestProxyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference">HdinsightKafkaClusterRestProxyOutputReference</a>

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.roles"></a>

```typescript
public readonly roles: HdinsightKafkaClusterRolesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference">HdinsightKafkaClusterRolesOutputReference</a>

---

##### `securityProfile`<sup>Required</sup> <a name="securityProfile" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.securityProfile"></a>

```typescript
public readonly securityProfile: HdinsightKafkaClusterSecurityProfileOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference">HdinsightKafkaClusterSecurityProfileOutputReference</a>

---

##### `sshEndpoint`<sup>Required</sup> <a name="sshEndpoint" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.sshEndpoint"></a>

```typescript
public readonly sshEndpoint: string;
```

- *Type:* string

---

##### `storageAccount`<sup>Required</sup> <a name="storageAccount" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.storageAccount"></a>

```typescript
public readonly storageAccount: HdinsightKafkaClusterStorageAccountList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList">HdinsightKafkaClusterStorageAccountList</a>

---

##### `storageAccountGen2`<sup>Required</sup> <a name="storageAccountGen2" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.storageAccountGen2"></a>

```typescript
public readonly storageAccountGen2: HdinsightKafkaClusterStorageAccountGen2OutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference">HdinsightKafkaClusterStorageAccountGen2OutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.timeouts"></a>

```typescript
public readonly timeouts: HdinsightKafkaClusterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference">HdinsightKafkaClusterTimeoutsOutputReference</a>

---

##### `clusterVersionInput`<sup>Optional</sup> <a name="clusterVersionInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.clusterVersionInput"></a>

```typescript
public readonly clusterVersionInput: string;
```

- *Type:* string

---

##### `componentVersionInput`<sup>Optional</sup> <a name="componentVersionInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.componentVersionInput"></a>

```typescript
public readonly componentVersionInput: HdinsightKafkaClusterComponentVersion;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersion">HdinsightKafkaClusterComponentVersion</a>

---

##### `computeIsolationInput`<sup>Optional</sup> <a name="computeIsolationInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.computeIsolationInput"></a>

```typescript
public readonly computeIsolationInput: HdinsightKafkaClusterComputeIsolation;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolation">HdinsightKafkaClusterComputeIsolation</a>

---

##### `diskEncryptionInput`<sup>Optional</sup> <a name="diskEncryptionInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.diskEncryptionInput"></a>

```typescript
public readonly diskEncryptionInput: IResolvable | HdinsightKafkaClusterDiskEncryption[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption">HdinsightKafkaClusterDiskEncryption</a>[]

---

##### `encryptionInTransitEnabledInput`<sup>Optional</sup> <a name="encryptionInTransitEnabledInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.encryptionInTransitEnabledInput"></a>

```typescript
public readonly encryptionInTransitEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `extensionInput`<sup>Optional</sup> <a name="extensionInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.extensionInput"></a>

```typescript
public readonly extensionInput: HdinsightKafkaClusterExtension;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtension">HdinsightKafkaClusterExtension</a>

---

##### `gatewayInput`<sup>Optional</sup> <a name="gatewayInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.gatewayInput"></a>

```typescript
public readonly gatewayInput: HdinsightKafkaClusterGateway;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGateway">HdinsightKafkaClusterGateway</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `metastoresInput`<sup>Optional</sup> <a name="metastoresInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.metastoresInput"></a>

```typescript
public readonly metastoresInput: HdinsightKafkaClusterMetastores;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores">HdinsightKafkaClusterMetastores</a>

---

##### `monitorInput`<sup>Optional</sup> <a name="monitorInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.monitorInput"></a>

```typescript
public readonly monitorInput: HdinsightKafkaClusterMonitor;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitor">HdinsightKafkaClusterMonitor</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.networkInput"></a>

```typescript
public readonly networkInput: HdinsightKafkaClusterNetwork;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetwork">HdinsightKafkaClusterNetwork</a>

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `restProxyInput`<sup>Optional</sup> <a name="restProxyInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.restProxyInput"></a>

```typescript
public readonly restProxyInput: HdinsightKafkaClusterRestProxy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxy">HdinsightKafkaClusterRestProxy</a>

---

##### `rolesInput`<sup>Optional</sup> <a name="rolesInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.rolesInput"></a>

```typescript
public readonly rolesInput: HdinsightKafkaClusterRoles;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles">HdinsightKafkaClusterRoles</a>

---

##### `securityProfileInput`<sup>Optional</sup> <a name="securityProfileInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.securityProfileInput"></a>

```typescript
public readonly securityProfileInput: HdinsightKafkaClusterSecurityProfile;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile">HdinsightKafkaClusterSecurityProfile</a>

---

##### `storageAccountGen2Input`<sup>Optional</sup> <a name="storageAccountGen2Input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.storageAccountGen2Input"></a>

```typescript
public readonly storageAccountGen2Input: HdinsightKafkaClusterStorageAccountGen2;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2">HdinsightKafkaClusterStorageAccountGen2</a>

---

##### `storageAccountInput`<sup>Optional</sup> <a name="storageAccountInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.storageAccountInput"></a>

```typescript
public readonly storageAccountInput: IResolvable | HdinsightKafkaClusterStorageAccount[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount">HdinsightKafkaClusterStorageAccount</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tierInput`<sup>Optional</sup> <a name="tierInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.tierInput"></a>

```typescript
public readonly tierInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | HdinsightKafkaClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts">HdinsightKafkaClusterTimeouts</a>

---

##### `tlsMinVersionInput`<sup>Optional</sup> <a name="tlsMinVersionInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.tlsMinVersionInput"></a>

```typescript
public readonly tlsMinVersionInput: string;
```

- *Type:* string

---

##### `clusterVersion`<sup>Required</sup> <a name="clusterVersion" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.clusterVersion"></a>

```typescript
public readonly clusterVersion: string;
```

- *Type:* string

---

##### `encryptionInTransitEnabled`<sup>Required</sup> <a name="encryptionInTransitEnabled" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.encryptionInTransitEnabled"></a>

```typescript
public readonly encryptionInTransitEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

---

##### `tlsMinVersion`<sup>Required</sup> <a name="tlsMinVersion" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.tlsMinVersion"></a>

```typescript
public readonly tlsMinVersion: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HdinsightKafkaClusterComponentVersion <a name="HdinsightKafkaClusterComponentVersion" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersion.Initializer"></a>

```typescript
import { hdinsightKafkaCluster } from '@cdktf/provider-azurerm'

const hdinsightKafkaClusterComponentVersion: hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersion = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersion.property.kafka">kafka</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#kafka HdinsightKafkaCluster#kafka}. |

---

##### `kafka`<sup>Required</sup> <a name="kafka" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersion.property.kafka"></a>

```typescript
public readonly kafka: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#kafka HdinsightKafkaCluster#kafka}.

---

### HdinsightKafkaClusterComputeIsolation <a name="HdinsightKafkaClusterComputeIsolation" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolation.Initializer"></a>

```typescript
import { hdinsightKafkaCluster } from '@cdktf/provider-azurerm'

const hdinsightKafkaClusterComputeIsolation: hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolation.property.computeIsolationEnabled">computeIsolationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#compute_isolation_enabled HdinsightKafkaCluster#compute_isolation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolation.property.hostSku">hostSku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#host_sku HdinsightKafkaCluster#host_sku}. |

---

##### `computeIsolationEnabled`<sup>Optional</sup> <a name="computeIsolationEnabled" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolation.property.computeIsolationEnabled"></a>

```typescript
public readonly computeIsolationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#compute_isolation_enabled HdinsightKafkaCluster#compute_isolation_enabled}.

---

##### `hostSku`<sup>Optional</sup> <a name="hostSku" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolation.property.hostSku"></a>

```typescript
public readonly hostSku: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#host_sku HdinsightKafkaCluster#host_sku}.

---

### HdinsightKafkaClusterConfig <a name="HdinsightKafkaClusterConfig" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.Initializer"></a>

```typescript
import { hdinsightKafkaCluster } from '@cdktf/provider-azurerm'

const hdinsightKafkaClusterConfig: hdinsightKafkaCluster.HdinsightKafkaClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.clusterVersion">clusterVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#cluster_version HdinsightKafkaCluster#cluster_version}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.componentVersion">componentVersion</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersion">HdinsightKafkaClusterComponentVersion</a></code> | component_version block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.gateway">gateway</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGateway">HdinsightKafkaClusterGateway</a></code> | gateway block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#location HdinsightKafkaCluster#location}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#name HdinsightKafkaCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#resource_group_name HdinsightKafkaCluster#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.roles">roles</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles">HdinsightKafkaClusterRoles</a></code> | roles block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.tier">tier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#tier HdinsightKafkaCluster#tier}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.computeIsolation">computeIsolation</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolation">HdinsightKafkaClusterComputeIsolation</a></code> | compute_isolation block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.diskEncryption">diskEncryption</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption">HdinsightKafkaClusterDiskEncryption</a>[]</code> | disk_encryption block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.encryptionInTransitEnabled">encryptionInTransitEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#encryption_in_transit_enabled HdinsightKafkaCluster#encryption_in_transit_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.extension">extension</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtension">HdinsightKafkaClusterExtension</a></code> | extension block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#id HdinsightKafkaCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.metastores">metastores</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores">HdinsightKafkaClusterMetastores</a></code> | metastores block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.monitor">monitor</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitor">HdinsightKafkaClusterMonitor</a></code> | monitor block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.network">network</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetwork">HdinsightKafkaClusterNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.restProxy">restProxy</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxy">HdinsightKafkaClusterRestProxy</a></code> | rest_proxy block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.securityProfile">securityProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile">HdinsightKafkaClusterSecurityProfile</a></code> | security_profile block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.storageAccount">storageAccount</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount">HdinsightKafkaClusterStorageAccount</a>[]</code> | storage_account block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.storageAccountGen2">storageAccountGen2</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2">HdinsightKafkaClusterStorageAccountGen2</a></code> | storage_account_gen2 block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#tags HdinsightKafkaCluster#tags}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts">HdinsightKafkaClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.tlsMinVersion">tlsMinVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#tls_min_version HdinsightKafkaCluster#tls_min_version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterVersion`<sup>Required</sup> <a name="clusterVersion" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.clusterVersion"></a>

```typescript
public readonly clusterVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#cluster_version HdinsightKafkaCluster#cluster_version}.

---

##### `componentVersion`<sup>Required</sup> <a name="componentVersion" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.componentVersion"></a>

```typescript
public readonly componentVersion: HdinsightKafkaClusterComponentVersion;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersion">HdinsightKafkaClusterComponentVersion</a>

component_version block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#component_version HdinsightKafkaCluster#component_version}

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.gateway"></a>

```typescript
public readonly gateway: HdinsightKafkaClusterGateway;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGateway">HdinsightKafkaClusterGateway</a>

gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#gateway HdinsightKafkaCluster#gateway}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#location HdinsightKafkaCluster#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#name HdinsightKafkaCluster#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#resource_group_name HdinsightKafkaCluster#resource_group_name}.

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.roles"></a>

```typescript
public readonly roles: HdinsightKafkaClusterRoles;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles">HdinsightKafkaClusterRoles</a>

roles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#roles HdinsightKafkaCluster#roles}

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#tier HdinsightKafkaCluster#tier}.

---

##### `computeIsolation`<sup>Optional</sup> <a name="computeIsolation" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.computeIsolation"></a>

```typescript
public readonly computeIsolation: HdinsightKafkaClusterComputeIsolation;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolation">HdinsightKafkaClusterComputeIsolation</a>

compute_isolation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#compute_isolation HdinsightKafkaCluster#compute_isolation}

---

##### `diskEncryption`<sup>Optional</sup> <a name="diskEncryption" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.diskEncryption"></a>

```typescript
public readonly diskEncryption: IResolvable | HdinsightKafkaClusterDiskEncryption[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption">HdinsightKafkaClusterDiskEncryption</a>[]

disk_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#disk_encryption HdinsightKafkaCluster#disk_encryption}

---

##### `encryptionInTransitEnabled`<sup>Optional</sup> <a name="encryptionInTransitEnabled" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.encryptionInTransitEnabled"></a>

```typescript
public readonly encryptionInTransitEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#encryption_in_transit_enabled HdinsightKafkaCluster#encryption_in_transit_enabled}.

---

##### `extension`<sup>Optional</sup> <a name="extension" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.extension"></a>

```typescript
public readonly extension: HdinsightKafkaClusterExtension;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtension">HdinsightKafkaClusterExtension</a>

extension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#extension HdinsightKafkaCluster#extension}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#id HdinsightKafkaCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metastores`<sup>Optional</sup> <a name="metastores" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.metastores"></a>

```typescript
public readonly metastores: HdinsightKafkaClusterMetastores;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores">HdinsightKafkaClusterMetastores</a>

metastores block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#metastores HdinsightKafkaCluster#metastores}

---

##### `monitor`<sup>Optional</sup> <a name="monitor" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.monitor"></a>

```typescript
public readonly monitor: HdinsightKafkaClusterMonitor;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitor">HdinsightKafkaClusterMonitor</a>

monitor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#monitor HdinsightKafkaCluster#monitor}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.network"></a>

```typescript
public readonly network: HdinsightKafkaClusterNetwork;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetwork">HdinsightKafkaClusterNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#network HdinsightKafkaCluster#network}

---

##### `restProxy`<sup>Optional</sup> <a name="restProxy" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.restProxy"></a>

```typescript
public readonly restProxy: HdinsightKafkaClusterRestProxy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxy">HdinsightKafkaClusterRestProxy</a>

rest_proxy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#rest_proxy HdinsightKafkaCluster#rest_proxy}

---

##### `securityProfile`<sup>Optional</sup> <a name="securityProfile" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.securityProfile"></a>

```typescript
public readonly securityProfile: HdinsightKafkaClusterSecurityProfile;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile">HdinsightKafkaClusterSecurityProfile</a>

security_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#security_profile HdinsightKafkaCluster#security_profile}

---

##### `storageAccount`<sup>Optional</sup> <a name="storageAccount" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.storageAccount"></a>

```typescript
public readonly storageAccount: IResolvable | HdinsightKafkaClusterStorageAccount[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount">HdinsightKafkaClusterStorageAccount</a>[]

storage_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#storage_account HdinsightKafkaCluster#storage_account}

---

##### `storageAccountGen2`<sup>Optional</sup> <a name="storageAccountGen2" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.storageAccountGen2"></a>

```typescript
public readonly storageAccountGen2: HdinsightKafkaClusterStorageAccountGen2;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2">HdinsightKafkaClusterStorageAccountGen2</a>

storage_account_gen2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#storage_account_gen2 HdinsightKafkaCluster#storage_account_gen2}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#tags HdinsightKafkaCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: HdinsightKafkaClusterTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts">HdinsightKafkaClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#timeouts HdinsightKafkaCluster#timeouts}

---

##### `tlsMinVersion`<sup>Optional</sup> <a name="tlsMinVersion" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.tlsMinVersion"></a>

```typescript
public readonly tlsMinVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#tls_min_version HdinsightKafkaCluster#tls_min_version}.

---

### HdinsightKafkaClusterDiskEncryption <a name="HdinsightKafkaClusterDiskEncryption" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption.Initializer"></a>

```typescript
import { hdinsightKafkaCluster } from '@cdktf/provider-azurerm'

const hdinsightKafkaClusterDiskEncryption: hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption.property.encryptionAlgorithm">encryptionAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#encryption_algorithm HdinsightKafkaCluster#encryption_algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption.property.encryptionAtHostEnabled">encryptionAtHostEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#encryption_at_host_enabled HdinsightKafkaCluster#encryption_at_host_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#key_vault_key_id HdinsightKafkaCluster#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption.property.keyVaultManagedIdentityId">keyVaultManagedIdentityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#key_vault_managed_identity_id HdinsightKafkaCluster#key_vault_managed_identity_id}. |

---

##### `encryptionAlgorithm`<sup>Optional</sup> <a name="encryptionAlgorithm" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption.property.encryptionAlgorithm"></a>

```typescript
public readonly encryptionAlgorithm: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#encryption_algorithm HdinsightKafkaCluster#encryption_algorithm}.

---

##### `encryptionAtHostEnabled`<sup>Optional</sup> <a name="encryptionAtHostEnabled" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption.property.encryptionAtHostEnabled"></a>

```typescript
public readonly encryptionAtHostEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#encryption_at_host_enabled HdinsightKafkaCluster#encryption_at_host_enabled}.

---

##### `keyVaultKeyId`<sup>Optional</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption.property.keyVaultKeyId"></a>

```typescript
public readonly keyVaultKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#key_vault_key_id HdinsightKafkaCluster#key_vault_key_id}.

---

##### `keyVaultManagedIdentityId`<sup>Optional</sup> <a name="keyVaultManagedIdentityId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption.property.keyVaultManagedIdentityId"></a>

```typescript
public readonly keyVaultManagedIdentityId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#key_vault_managed_identity_id HdinsightKafkaCluster#key_vault_managed_identity_id}.

---

### HdinsightKafkaClusterExtension <a name="HdinsightKafkaClusterExtension" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtension.Initializer"></a>

```typescript
import { hdinsightKafkaCluster } from '@cdktf/provider-azurerm'

const hdinsightKafkaClusterExtension: hdinsightKafkaCluster.HdinsightKafkaClusterExtension = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtension.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#log_analytics_workspace_id HdinsightKafkaCluster#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtension.property.primaryKey">primaryKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#primary_key HdinsightKafkaCluster#primary_key}. |

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtension.property.logAnalyticsWorkspaceId"></a>

```typescript
public readonly logAnalyticsWorkspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#log_analytics_workspace_id HdinsightKafkaCluster#log_analytics_workspace_id}.

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtension.property.primaryKey"></a>

```typescript
public readonly primaryKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#primary_key HdinsightKafkaCluster#primary_key}.

---

### HdinsightKafkaClusterGateway <a name="HdinsightKafkaClusterGateway" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGateway.Initializer"></a>

```typescript
import { hdinsightKafkaCluster } from '@cdktf/provider-azurerm'

const hdinsightKafkaClusterGateway: hdinsightKafkaCluster.HdinsightKafkaClusterGateway = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGateway.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGateway.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGateway.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGateway.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}.

---

### HdinsightKafkaClusterMetastores <a name="HdinsightKafkaClusterMetastores" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores.Initializer"></a>

```typescript
import { hdinsightKafkaCluster } from '@cdktf/provider-azurerm'

const hdinsightKafkaClusterMetastores: hdinsightKafkaCluster.HdinsightKafkaClusterMetastores = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores.property.ambari">ambari</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari">HdinsightKafkaClusterMetastoresAmbari</a></code> | ambari block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores.property.hive">hive</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive">HdinsightKafkaClusterMetastoresHive</a></code> | hive block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores.property.oozie">oozie</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie">HdinsightKafkaClusterMetastoresOozie</a></code> | oozie block. |

---

##### `ambari`<sup>Optional</sup> <a name="ambari" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores.property.ambari"></a>

```typescript
public readonly ambari: HdinsightKafkaClusterMetastoresAmbari;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari">HdinsightKafkaClusterMetastoresAmbari</a>

ambari block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#ambari HdinsightKafkaCluster#ambari}

---

##### `hive`<sup>Optional</sup> <a name="hive" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores.property.hive"></a>

```typescript
public readonly hive: HdinsightKafkaClusterMetastoresHive;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive">HdinsightKafkaClusterMetastoresHive</a>

hive block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#hive HdinsightKafkaCluster#hive}

---

##### `oozie`<sup>Optional</sup> <a name="oozie" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores.property.oozie"></a>

```typescript
public readonly oozie: HdinsightKafkaClusterMetastoresOozie;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie">HdinsightKafkaClusterMetastoresOozie</a>

oozie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#oozie HdinsightKafkaCluster#oozie}

---

### HdinsightKafkaClusterMetastoresAmbari <a name="HdinsightKafkaClusterMetastoresAmbari" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari.Initializer"></a>

```typescript
import { hdinsightKafkaCluster } from '@cdktf/provider-azurerm'

const hdinsightKafkaClusterMetastoresAmbari: hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#database_name HdinsightKafkaCluster#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari.property.server">server</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#server HdinsightKafkaCluster#server}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}. |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#database_name HdinsightKafkaCluster#database_name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}.

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari.property.server"></a>

```typescript
public readonly server: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#server HdinsightKafkaCluster#server}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}.

---

### HdinsightKafkaClusterMetastoresHive <a name="HdinsightKafkaClusterMetastoresHive" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive.Initializer"></a>

```typescript
import { hdinsightKafkaCluster } from '@cdktf/provider-azurerm'

const hdinsightKafkaClusterMetastoresHive: hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#database_name HdinsightKafkaCluster#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive.property.server">server</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#server HdinsightKafkaCluster#server}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}. |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#database_name HdinsightKafkaCluster#database_name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}.

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive.property.server"></a>

```typescript
public readonly server: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#server HdinsightKafkaCluster#server}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}.

---

### HdinsightKafkaClusterMetastoresOozie <a name="HdinsightKafkaClusterMetastoresOozie" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie.Initializer"></a>

```typescript
import { hdinsightKafkaCluster } from '@cdktf/provider-azurerm'

const hdinsightKafkaClusterMetastoresOozie: hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#database_name HdinsightKafkaCluster#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie.property.server">server</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#server HdinsightKafkaCluster#server}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}. |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#database_name HdinsightKafkaCluster#database_name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}.

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie.property.server"></a>

```typescript
public readonly server: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#server HdinsightKafkaCluster#server}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}.

---

### HdinsightKafkaClusterMonitor <a name="HdinsightKafkaClusterMonitor" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitor.Initializer"></a>

```typescript
import { hdinsightKafkaCluster } from '@cdktf/provider-azurerm'

const hdinsightKafkaClusterMonitor: hdinsightKafkaCluster.HdinsightKafkaClusterMonitor = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitor.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#log_analytics_workspace_id HdinsightKafkaCluster#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitor.property.primaryKey">primaryKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#primary_key HdinsightKafkaCluster#primary_key}. |

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitor.property.logAnalyticsWorkspaceId"></a>

```typescript
public readonly logAnalyticsWorkspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#log_analytics_workspace_id HdinsightKafkaCluster#log_analytics_workspace_id}.

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitor.property.primaryKey"></a>

```typescript
public readonly primaryKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#primary_key HdinsightKafkaCluster#primary_key}.

---

### HdinsightKafkaClusterNetwork <a name="HdinsightKafkaClusterNetwork" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetwork.Initializer"></a>

```typescript
import { hdinsightKafkaCluster } from '@cdktf/provider-azurerm'

const hdinsightKafkaClusterNetwork: hdinsightKafkaCluster.HdinsightKafkaClusterNetwork = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetwork.property.connectionDirection">connectionDirection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#connection_direction HdinsightKafkaCluster#connection_direction}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetwork.property.privateLinkEnabled">privateLinkEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#private_link_enabled HdinsightKafkaCluster#private_link_enabled}. |

---

##### `connectionDirection`<sup>Optional</sup> <a name="connectionDirection" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetwork.property.connectionDirection"></a>

```typescript
public readonly connectionDirection: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#connection_direction HdinsightKafkaCluster#connection_direction}.

---

##### `privateLinkEnabled`<sup>Optional</sup> <a name="privateLinkEnabled" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetwork.property.privateLinkEnabled"></a>

```typescript
public readonly privateLinkEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#private_link_enabled HdinsightKafkaCluster#private_link_enabled}.

---

### HdinsightKafkaClusterRestProxy <a name="HdinsightKafkaClusterRestProxy" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxy.Initializer"></a>

```typescript
import { hdinsightKafkaCluster } from '@cdktf/provider-azurerm'

const hdinsightKafkaClusterRestProxy: hdinsightKafkaCluster.HdinsightKafkaClusterRestProxy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxy.property.securityGroupId">securityGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#security_group_id HdinsightKafkaCluster#security_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxy.property.securityGroupName">securityGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#security_group_name HdinsightKafkaCluster#security_group_name}. |

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxy.property.securityGroupId"></a>

```typescript
public readonly securityGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#security_group_id HdinsightKafkaCluster#security_group_id}.

---

##### `securityGroupName`<sup>Required</sup> <a name="securityGroupName" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxy.property.securityGroupName"></a>

```typescript
public readonly securityGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#security_group_name HdinsightKafkaCluster#security_group_name}.

---

### HdinsightKafkaClusterRoles <a name="HdinsightKafkaClusterRoles" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles.Initializer"></a>

```typescript
import { hdinsightKafkaCluster } from '@cdktf/provider-azurerm'

const hdinsightKafkaClusterRoles: hdinsightKafkaCluster.HdinsightKafkaClusterRoles = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles.property.headNode">headNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode">HdinsightKafkaClusterRolesHeadNode</a></code> | head_node block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles.property.workerNode">workerNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode">HdinsightKafkaClusterRolesWorkerNode</a></code> | worker_node block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles.property.zookeeperNode">zookeeperNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode">HdinsightKafkaClusterRolesZookeeperNode</a></code> | zookeeper_node block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles.property.kafkaManagementNode">kafkaManagementNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode">HdinsightKafkaClusterRolesKafkaManagementNode</a></code> | kafka_management_node block. |

---

##### `headNode`<sup>Required</sup> <a name="headNode" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles.property.headNode"></a>

```typescript
public readonly headNode: HdinsightKafkaClusterRolesHeadNode;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode">HdinsightKafkaClusterRolesHeadNode</a>

head_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#head_node HdinsightKafkaCluster#head_node}

---

##### `workerNode`<sup>Required</sup> <a name="workerNode" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles.property.workerNode"></a>

```typescript
public readonly workerNode: HdinsightKafkaClusterRolesWorkerNode;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode">HdinsightKafkaClusterRolesWorkerNode</a>

worker_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#worker_node HdinsightKafkaCluster#worker_node}

---

##### `zookeeperNode`<sup>Required</sup> <a name="zookeeperNode" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles.property.zookeeperNode"></a>

```typescript
public readonly zookeeperNode: HdinsightKafkaClusterRolesZookeeperNode;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode">HdinsightKafkaClusterRolesZookeeperNode</a>

zookeeper_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#zookeeper_node HdinsightKafkaCluster#zookeeper_node}

---

##### `kafkaManagementNode`<sup>Optional</sup> <a name="kafkaManagementNode" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles.property.kafkaManagementNode"></a>

```typescript
public readonly kafkaManagementNode: HdinsightKafkaClusterRolesKafkaManagementNode;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode">HdinsightKafkaClusterRolesKafkaManagementNode</a>

kafka_management_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#kafka_management_node HdinsightKafkaCluster#kafka_management_node}

---

### HdinsightKafkaClusterRolesHeadNode <a name="HdinsightKafkaClusterRolesHeadNode" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode.Initializer"></a>

```typescript
import { hdinsightKafkaCluster } from '@cdktf/provider-azurerm'

const hdinsightKafkaClusterRolesHeadNode: hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode.property.vmSize">vmSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#vm_size HdinsightKafkaCluster#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode.property.scriptActions">scriptActions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions">HdinsightKafkaClusterRolesHeadNodeScriptActions</a>[]</code> | script_actions block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode.property.sshKeys">sshKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#ssh_keys HdinsightKafkaCluster#ssh_keys}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#subnet_id HdinsightKafkaCluster#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode.property.virtualNetworkId">virtualNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#virtual_network_id HdinsightKafkaCluster#virtual_network_id}. |

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}.

---

##### `vmSize`<sup>Required</sup> <a name="vmSize" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode.property.vmSize"></a>

```typescript
public readonly vmSize: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#vm_size HdinsightKafkaCluster#vm_size}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}.

---

##### `scriptActions`<sup>Optional</sup> <a name="scriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode.property.scriptActions"></a>

```typescript
public readonly scriptActions: IResolvable | HdinsightKafkaClusterRolesHeadNodeScriptActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions">HdinsightKafkaClusterRolesHeadNodeScriptActions</a>[]

script_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#script_actions HdinsightKafkaCluster#script_actions}

---

##### `sshKeys`<sup>Optional</sup> <a name="sshKeys" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode.property.sshKeys"></a>

```typescript
public readonly sshKeys: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#ssh_keys HdinsightKafkaCluster#ssh_keys}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#subnet_id HdinsightKafkaCluster#subnet_id}.

---

##### `virtualNetworkId`<sup>Optional</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode.property.virtualNetworkId"></a>

```typescript
public readonly virtualNetworkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#virtual_network_id HdinsightKafkaCluster#virtual_network_id}.

---

### HdinsightKafkaClusterRolesHeadNodeScriptActions <a name="HdinsightKafkaClusterRolesHeadNodeScriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions.Initializer"></a>

```typescript
import { hdinsightKafkaCluster } from '@cdktf/provider-azurerm'

const hdinsightKafkaClusterRolesHeadNodeScriptActions: hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#name HdinsightKafkaCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions.property.uri">uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#uri HdinsightKafkaCluster#uri}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions.property.parameters">parameters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#parameters HdinsightKafkaCluster#parameters}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#name HdinsightKafkaCluster#name}.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#uri HdinsightKafkaCluster#uri}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions.property.parameters"></a>

```typescript
public readonly parameters: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#parameters HdinsightKafkaCluster#parameters}.

---

### HdinsightKafkaClusterRolesKafkaManagementNode <a name="HdinsightKafkaClusterRolesKafkaManagementNode" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode.Initializer"></a>

```typescript
import { hdinsightKafkaCluster } from '@cdktf/provider-azurerm'

const hdinsightKafkaClusterRolesKafkaManagementNode: hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode.property.vmSize">vmSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#vm_size HdinsightKafkaCluster#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode.property.scriptActions">scriptActions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions">HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions</a>[]</code> | script_actions block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode.property.sshKeys">sshKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#ssh_keys HdinsightKafkaCluster#ssh_keys}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#subnet_id HdinsightKafkaCluster#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode.property.virtualNetworkId">virtualNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#virtual_network_id HdinsightKafkaCluster#virtual_network_id}. |

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}.

---

##### `vmSize`<sup>Required</sup> <a name="vmSize" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode.property.vmSize"></a>

```typescript
public readonly vmSize: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#vm_size HdinsightKafkaCluster#vm_size}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}.

---

##### `scriptActions`<sup>Optional</sup> <a name="scriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode.property.scriptActions"></a>

```typescript
public readonly scriptActions: IResolvable | HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions">HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions</a>[]

script_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#script_actions HdinsightKafkaCluster#script_actions}

---

##### `sshKeys`<sup>Optional</sup> <a name="sshKeys" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode.property.sshKeys"></a>

```typescript
public readonly sshKeys: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#ssh_keys HdinsightKafkaCluster#ssh_keys}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#subnet_id HdinsightKafkaCluster#subnet_id}.

---

##### `virtualNetworkId`<sup>Optional</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode.property.virtualNetworkId"></a>

```typescript
public readonly virtualNetworkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#virtual_network_id HdinsightKafkaCluster#virtual_network_id}.

---

### HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions <a name="HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions.Initializer"></a>

```typescript
import { hdinsightKafkaCluster } from '@cdktf/provider-azurerm'

const hdinsightKafkaClusterRolesKafkaManagementNodeScriptActions: hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#name HdinsightKafkaCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions.property.uri">uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#uri HdinsightKafkaCluster#uri}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions.property.parameters">parameters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#parameters HdinsightKafkaCluster#parameters}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#name HdinsightKafkaCluster#name}.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#uri HdinsightKafkaCluster#uri}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions.property.parameters"></a>

```typescript
public readonly parameters: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#parameters HdinsightKafkaCluster#parameters}.

---

### HdinsightKafkaClusterRolesWorkerNode <a name="HdinsightKafkaClusterRolesWorkerNode" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.Initializer"></a>

```typescript
import { hdinsightKafkaCluster } from '@cdktf/provider-azurerm'

const hdinsightKafkaClusterRolesWorkerNode: hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.numberOfDisksPerNode">numberOfDisksPerNode</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#number_of_disks_per_node HdinsightKafkaCluster#number_of_disks_per_node}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.targetInstanceCount">targetInstanceCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#target_instance_count HdinsightKafkaCluster#target_instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.vmSize">vmSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#vm_size HdinsightKafkaCluster#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.scriptActions">scriptActions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions">HdinsightKafkaClusterRolesWorkerNodeScriptActions</a>[]</code> | script_actions block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.sshKeys">sshKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#ssh_keys HdinsightKafkaCluster#ssh_keys}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#subnet_id HdinsightKafkaCluster#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.virtualNetworkId">virtualNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#virtual_network_id HdinsightKafkaCluster#virtual_network_id}. |

---

##### `numberOfDisksPerNode`<sup>Required</sup> <a name="numberOfDisksPerNode" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.numberOfDisksPerNode"></a>

```typescript
public readonly numberOfDisksPerNode: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#number_of_disks_per_node HdinsightKafkaCluster#number_of_disks_per_node}.

---

##### `targetInstanceCount`<sup>Required</sup> <a name="targetInstanceCount" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.targetInstanceCount"></a>

```typescript
public readonly targetInstanceCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#target_instance_count HdinsightKafkaCluster#target_instance_count}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}.

---

##### `vmSize`<sup>Required</sup> <a name="vmSize" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.vmSize"></a>

```typescript
public readonly vmSize: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#vm_size HdinsightKafkaCluster#vm_size}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}.

---

##### `scriptActions`<sup>Optional</sup> <a name="scriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.scriptActions"></a>

```typescript
public readonly scriptActions: IResolvable | HdinsightKafkaClusterRolesWorkerNodeScriptActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions">HdinsightKafkaClusterRolesWorkerNodeScriptActions</a>[]

script_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#script_actions HdinsightKafkaCluster#script_actions}

---

##### `sshKeys`<sup>Optional</sup> <a name="sshKeys" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.sshKeys"></a>

```typescript
public readonly sshKeys: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#ssh_keys HdinsightKafkaCluster#ssh_keys}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#subnet_id HdinsightKafkaCluster#subnet_id}.

---

##### `virtualNetworkId`<sup>Optional</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.virtualNetworkId"></a>

```typescript
public readonly virtualNetworkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#virtual_network_id HdinsightKafkaCluster#virtual_network_id}.

---

### HdinsightKafkaClusterRolesWorkerNodeScriptActions <a name="HdinsightKafkaClusterRolesWorkerNodeScriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions.Initializer"></a>

```typescript
import { hdinsightKafkaCluster } from '@cdktf/provider-azurerm'

const hdinsightKafkaClusterRolesWorkerNodeScriptActions: hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#name HdinsightKafkaCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions.property.uri">uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#uri HdinsightKafkaCluster#uri}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions.property.parameters">parameters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#parameters HdinsightKafkaCluster#parameters}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#name HdinsightKafkaCluster#name}.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#uri HdinsightKafkaCluster#uri}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions.property.parameters"></a>

```typescript
public readonly parameters: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#parameters HdinsightKafkaCluster#parameters}.

---

### HdinsightKafkaClusterRolesZookeeperNode <a name="HdinsightKafkaClusterRolesZookeeperNode" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode.Initializer"></a>

```typescript
import { hdinsightKafkaCluster } from '@cdktf/provider-azurerm'

const hdinsightKafkaClusterRolesZookeeperNode: hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode.property.vmSize">vmSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#vm_size HdinsightKafkaCluster#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode.property.scriptActions">scriptActions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions">HdinsightKafkaClusterRolesZookeeperNodeScriptActions</a>[]</code> | script_actions block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode.property.sshKeys">sshKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#ssh_keys HdinsightKafkaCluster#ssh_keys}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#subnet_id HdinsightKafkaCluster#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode.property.virtualNetworkId">virtualNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#virtual_network_id HdinsightKafkaCluster#virtual_network_id}. |

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}.

---

##### `vmSize`<sup>Required</sup> <a name="vmSize" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode.property.vmSize"></a>

```typescript
public readonly vmSize: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#vm_size HdinsightKafkaCluster#vm_size}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}.

---

##### `scriptActions`<sup>Optional</sup> <a name="scriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode.property.scriptActions"></a>

```typescript
public readonly scriptActions: IResolvable | HdinsightKafkaClusterRolesZookeeperNodeScriptActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions">HdinsightKafkaClusterRolesZookeeperNodeScriptActions</a>[]

script_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#script_actions HdinsightKafkaCluster#script_actions}

---

##### `sshKeys`<sup>Optional</sup> <a name="sshKeys" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode.property.sshKeys"></a>

```typescript
public readonly sshKeys: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#ssh_keys HdinsightKafkaCluster#ssh_keys}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#subnet_id HdinsightKafkaCluster#subnet_id}.

---

##### `virtualNetworkId`<sup>Optional</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode.property.virtualNetworkId"></a>

```typescript
public readonly virtualNetworkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#virtual_network_id HdinsightKafkaCluster#virtual_network_id}.

---

### HdinsightKafkaClusterRolesZookeeperNodeScriptActions <a name="HdinsightKafkaClusterRolesZookeeperNodeScriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions.Initializer"></a>

```typescript
import { hdinsightKafkaCluster } from '@cdktf/provider-azurerm'

const hdinsightKafkaClusterRolesZookeeperNodeScriptActions: hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#name HdinsightKafkaCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions.property.uri">uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#uri HdinsightKafkaCluster#uri}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions.property.parameters">parameters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#parameters HdinsightKafkaCluster#parameters}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#name HdinsightKafkaCluster#name}.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#uri HdinsightKafkaCluster#uri}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions.property.parameters"></a>

```typescript
public readonly parameters: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#parameters HdinsightKafkaCluster#parameters}.

---

### HdinsightKafkaClusterSecurityProfile <a name="HdinsightKafkaClusterSecurityProfile" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile.Initializer"></a>

```typescript
import { hdinsightKafkaCluster } from '@cdktf/provider-azurerm'

const hdinsightKafkaClusterSecurityProfile: hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile.property.aaddsResourceId">aaddsResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#aadds_resource_id HdinsightKafkaCluster#aadds_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile.property.domainName">domainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#domain_name HdinsightKafkaCluster#domain_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile.property.domainUsername">domainUsername</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#domain_username HdinsightKafkaCluster#domain_username}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile.property.domainUserPassword">domainUserPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#domain_user_password HdinsightKafkaCluster#domain_user_password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile.property.ldapsUrls">ldapsUrls</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#ldaps_urls HdinsightKafkaCluster#ldaps_urls}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile.property.msiResourceId">msiResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#msi_resource_id HdinsightKafkaCluster#msi_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile.property.clusterUsersGroupDns">clusterUsersGroupDns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#cluster_users_group_dns HdinsightKafkaCluster#cluster_users_group_dns}. |

---

##### `aaddsResourceId`<sup>Required</sup> <a name="aaddsResourceId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile.property.aaddsResourceId"></a>

```typescript
public readonly aaddsResourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#aadds_resource_id HdinsightKafkaCluster#aadds_resource_id}.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#domain_name HdinsightKafkaCluster#domain_name}.

---

##### `domainUsername`<sup>Required</sup> <a name="domainUsername" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile.property.domainUsername"></a>

```typescript
public readonly domainUsername: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#domain_username HdinsightKafkaCluster#domain_username}.

---

##### `domainUserPassword`<sup>Required</sup> <a name="domainUserPassword" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile.property.domainUserPassword"></a>

```typescript
public readonly domainUserPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#domain_user_password HdinsightKafkaCluster#domain_user_password}.

---

##### `ldapsUrls`<sup>Required</sup> <a name="ldapsUrls" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile.property.ldapsUrls"></a>

```typescript
public readonly ldapsUrls: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#ldaps_urls HdinsightKafkaCluster#ldaps_urls}.

---

##### `msiResourceId`<sup>Required</sup> <a name="msiResourceId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile.property.msiResourceId"></a>

```typescript
public readonly msiResourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#msi_resource_id HdinsightKafkaCluster#msi_resource_id}.

---

##### `clusterUsersGroupDns`<sup>Optional</sup> <a name="clusterUsersGroupDns" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile.property.clusterUsersGroupDns"></a>

```typescript
public readonly clusterUsersGroupDns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#cluster_users_group_dns HdinsightKafkaCluster#cluster_users_group_dns}.

---

### HdinsightKafkaClusterStorageAccount <a name="HdinsightKafkaClusterStorageAccount" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount.Initializer"></a>

```typescript
import { hdinsightKafkaCluster } from '@cdktf/provider-azurerm'

const hdinsightKafkaClusterStorageAccount: hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount.property.isDefault">isDefault</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#is_default HdinsightKafkaCluster#is_default}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount.property.storageAccountKey">storageAccountKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#storage_account_key HdinsightKafkaCluster#storage_account_key}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount.property.storageContainerId">storageContainerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#storage_container_id HdinsightKafkaCluster#storage_container_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount.property.storageResourceId">storageResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#storage_resource_id HdinsightKafkaCluster#storage_resource_id}. |

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount.property.isDefault"></a>

```typescript
public readonly isDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#is_default HdinsightKafkaCluster#is_default}.

---

##### `storageAccountKey`<sup>Required</sup> <a name="storageAccountKey" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount.property.storageAccountKey"></a>

```typescript
public readonly storageAccountKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#storage_account_key HdinsightKafkaCluster#storage_account_key}.

---

##### `storageContainerId`<sup>Required</sup> <a name="storageContainerId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount.property.storageContainerId"></a>

```typescript
public readonly storageContainerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#storage_container_id HdinsightKafkaCluster#storage_container_id}.

---

##### `storageResourceId`<sup>Optional</sup> <a name="storageResourceId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount.property.storageResourceId"></a>

```typescript
public readonly storageResourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#storage_resource_id HdinsightKafkaCluster#storage_resource_id}.

---

### HdinsightKafkaClusterStorageAccountGen2 <a name="HdinsightKafkaClusterStorageAccountGen2" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2.Initializer"></a>

```typescript
import { hdinsightKafkaCluster } from '@cdktf/provider-azurerm'

const hdinsightKafkaClusterStorageAccountGen2: hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2.property.filesystemId">filesystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#filesystem_id HdinsightKafkaCluster#filesystem_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2.property.isDefault">isDefault</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#is_default HdinsightKafkaCluster#is_default}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2.property.managedIdentityResourceId">managedIdentityResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#managed_identity_resource_id HdinsightKafkaCluster#managed_identity_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2.property.storageResourceId">storageResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#storage_resource_id HdinsightKafkaCluster#storage_resource_id}. |

---

##### `filesystemId`<sup>Required</sup> <a name="filesystemId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2.property.filesystemId"></a>

```typescript
public readonly filesystemId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#filesystem_id HdinsightKafkaCluster#filesystem_id}.

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2.property.isDefault"></a>

```typescript
public readonly isDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#is_default HdinsightKafkaCluster#is_default}.

---

##### `managedIdentityResourceId`<sup>Required</sup> <a name="managedIdentityResourceId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2.property.managedIdentityResourceId"></a>

```typescript
public readonly managedIdentityResourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#managed_identity_resource_id HdinsightKafkaCluster#managed_identity_resource_id}.

---

##### `storageResourceId`<sup>Required</sup> <a name="storageResourceId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2.property.storageResourceId"></a>

```typescript
public readonly storageResourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#storage_resource_id HdinsightKafkaCluster#storage_resource_id}.

---

### HdinsightKafkaClusterTimeouts <a name="HdinsightKafkaClusterTimeouts" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts.Initializer"></a>

```typescript
import { hdinsightKafkaCluster } from '@cdktf/provider-azurerm'

const hdinsightKafkaClusterTimeouts: hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#create HdinsightKafkaCluster#create}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#delete HdinsightKafkaCluster#delete}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#read HdinsightKafkaCluster#read}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#update HdinsightKafkaCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#create HdinsightKafkaCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#delete HdinsightKafkaCluster#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#read HdinsightKafkaCluster#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/hdinsight_kafka_cluster#update HdinsightKafkaCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HdinsightKafkaClusterComponentVersionOutputReference <a name="HdinsightKafkaClusterComponentVersionOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.Initializer"></a>

```typescript
import { hdinsightKafkaCluster } from '@cdktf/provider-azurerm'

new hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.property.kafkaInput">kafkaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.property.kafka">kafka</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersion">HdinsightKafkaClusterComponentVersion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kafkaInput`<sup>Optional</sup> <a name="kafkaInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.property.kafkaInput"></a>

```typescript
public readonly kafkaInput: string;
```

- *Type:* string

---

##### `kafka`<sup>Required</sup> <a name="kafka" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.property.kafka"></a>

```typescript
public readonly kafka: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HdinsightKafkaClusterComponentVersion;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersion">HdinsightKafkaClusterComponentVersion</a>

---


### HdinsightKafkaClusterComputeIsolationOutputReference <a name="HdinsightKafkaClusterComputeIsolationOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.Initializer"></a>

```typescript
import { hdinsightKafkaCluster } from '@cdktf/provider-azurerm'

new hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.resetComputeIsolationEnabled">resetComputeIsolationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.resetHostSku">resetHostSku</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComputeIsolationEnabled` <a name="resetComputeIsolationEnabled" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.resetComputeIsolationEnabled"></a>

```typescript
public resetComputeIsolationEnabled(): void
```

##### `resetHostSku` <a name="resetHostSku" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.resetHostSku"></a>

```typescript
public resetHostSku(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.property.computeIsolationEnabledInput">computeIsolationEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.property.hostSkuInput">hostSkuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.property.computeIsolationEnabled">computeIsolationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.property.hostSku">hostSku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolation">HdinsightKafkaClusterComputeIsolation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `computeIsolationEnabledInput`<sup>Optional</sup> <a name="computeIsolationEnabledInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.property.computeIsolationEnabledInput"></a>

```typescript
public readonly computeIsolationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostSkuInput`<sup>Optional</sup> <a name="hostSkuInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.property.hostSkuInput"></a>

```typescript
public readonly hostSkuInput: string;
```

- *Type:* string

---

##### `computeIsolationEnabled`<sup>Required</sup> <a name="computeIsolationEnabled" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.property.computeIsolationEnabled"></a>

```typescript
public readonly computeIsolationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostSku`<sup>Required</sup> <a name="hostSku" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.property.hostSku"></a>

```typescript
public readonly hostSku: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HdinsightKafkaClusterComputeIsolation;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolation">HdinsightKafkaClusterComputeIsolation</a>

---


### HdinsightKafkaClusterDiskEncryptionList <a name="HdinsightKafkaClusterDiskEncryptionList" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.Initializer"></a>

```typescript
import { hdinsightKafkaCluster } from '@cdktf/provider-azurerm'

new hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.get"></a>

```typescript
public get(index: number): HdinsightKafkaClusterDiskEncryptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption">HdinsightKafkaClusterDiskEncryption</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HdinsightKafkaClusterDiskEncryption[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption">HdinsightKafkaClusterDiskEncryption</a>[]

---


### HdinsightKafkaClusterDiskEncryptionOutputReference <a name="HdinsightKafkaClusterDiskEncryptionOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.Initializer"></a>

```typescript
import { hdinsightKafkaCluster } from '@cdktf/provider-azurerm'

new hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.resetEncryptionAlgorithm">resetEncryptionAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.resetEncryptionAtHostEnabled">resetEncryptionAtHostEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.resetKeyVaultKeyId">resetKeyVaultKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.resetKeyVaultManagedIdentityId">resetKeyVaultManagedIdentityId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncryptionAlgorithm` <a name="resetEncryptionAlgorithm" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.resetEncryptionAlgorithm"></a>

```typescript
public resetEncryptionAlgorithm(): void
```

##### `resetEncryptionAtHostEnabled` <a name="resetEncryptionAtHostEnabled" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.resetEncryptionAtHostEnabled"></a>

```typescript
public resetEncryptionAtHostEnabled(): void
```

##### `resetKeyVaultKeyId` <a name="resetKeyVaultKeyId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.resetKeyVaultKeyId"></a>

```typescript
public resetKeyVaultKeyId(): void
```

##### `resetKeyVaultManagedIdentityId` <a name="resetKeyVaultManagedIdentityId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.resetKeyVaultManagedIdentityId"></a>

```typescript
public resetKeyVaultManagedIdentityId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.encryptionAlgorithmInput">encryptionAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.encryptionAtHostEnabledInput">encryptionAtHostEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.keyVaultKeyIdInput">keyVaultKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.keyVaultManagedIdentityIdInput">keyVaultManagedIdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.encryptionAlgorithm">encryptionAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.encryptionAtHostEnabled">encryptionAtHostEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.keyVaultManagedIdentityId">keyVaultManagedIdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption">HdinsightKafkaClusterDiskEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionAlgorithmInput`<sup>Optional</sup> <a name="encryptionAlgorithmInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.encryptionAlgorithmInput"></a>

```typescript
public readonly encryptionAlgorithmInput: string;
```

- *Type:* string

---

##### `encryptionAtHostEnabledInput`<sup>Optional</sup> <a name="encryptionAtHostEnabledInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.encryptionAtHostEnabledInput"></a>

```typescript
public readonly encryptionAtHostEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyVaultKeyIdInput`<sup>Optional</sup> <a name="keyVaultKeyIdInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.keyVaultKeyIdInput"></a>

```typescript
public readonly keyVaultKeyIdInput: string;
```

- *Type:* string

---

##### `keyVaultManagedIdentityIdInput`<sup>Optional</sup> <a name="keyVaultManagedIdentityIdInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.keyVaultManagedIdentityIdInput"></a>

```typescript
public readonly keyVaultManagedIdentityIdInput: string;
```

- *Type:* string

---

##### `encryptionAlgorithm`<sup>Required</sup> <a name="encryptionAlgorithm" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.encryptionAlgorithm"></a>

```typescript
public readonly encryptionAlgorithm: string;
```

- *Type:* string

---

##### `encryptionAtHostEnabled`<sup>Required</sup> <a name="encryptionAtHostEnabled" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.encryptionAtHostEnabled"></a>

```typescript
public readonly encryptionAtHostEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyVaultKeyId`<sup>Required</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.keyVaultKeyId"></a>

```typescript
public readonly keyVaultKeyId: string;
```

- *Type:* string

---

##### `keyVaultManagedIdentityId`<sup>Required</sup> <a name="keyVaultManagedIdentityId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.keyVaultManagedIdentityId"></a>

```typescript
public readonly keyVaultManagedIdentityId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HdinsightKafkaClusterDiskEncryption;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption">HdinsightKafkaClusterDiskEncryption</a>

---


### HdinsightKafkaClusterExtensionOutputReference <a name="HdinsightKafkaClusterExtensionOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.Initializer"></a>

```typescript
import { hdinsightKafkaCluster } from '@cdktf/provider-azurerm'

new hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.property.logAnalyticsWorkspaceIdInput">logAnalyticsWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.property.primaryKeyInput">primaryKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.property.primaryKey">primaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtension">HdinsightKafkaClusterExtension</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="logAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.property.logAnalyticsWorkspaceIdInput"></a>

```typescript
public readonly logAnalyticsWorkspaceIdInput: string;
```

- *Type:* string

---

##### `primaryKeyInput`<sup>Optional</sup> <a name="primaryKeyInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.property.primaryKeyInput"></a>

```typescript
public readonly primaryKeyInput: string;
```

- *Type:* string

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.property.logAnalyticsWorkspaceId"></a>

```typescript
public readonly logAnalyticsWorkspaceId: string;
```

- *Type:* string

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.property.primaryKey"></a>

```typescript
public readonly primaryKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HdinsightKafkaClusterExtension;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtension">HdinsightKafkaClusterExtension</a>

---


### HdinsightKafkaClusterGatewayOutputReference <a name="HdinsightKafkaClusterGatewayOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.Initializer"></a>

```typescript
import { hdinsightKafkaCluster } from '@cdktf/provider-azurerm'

new hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGateway">HdinsightKafkaClusterGateway</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HdinsightKafkaClusterGateway;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGateway">HdinsightKafkaClusterGateway</a>

---


### HdinsightKafkaClusterMetastoresAmbariOutputReference <a name="HdinsightKafkaClusterMetastoresAmbariOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.Initializer"></a>

```typescript
import { hdinsightKafkaCluster } from '@cdktf/provider-azurerm'

new hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.serverInput">serverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.server">server</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari">HdinsightKafkaClusterMetastoresAmbari</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `serverInput`<sup>Optional</sup> <a name="serverInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.serverInput"></a>

```typescript
public readonly serverInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.server"></a>

```typescript
public readonly server: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HdinsightKafkaClusterMetastoresAmbari;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari">HdinsightKafkaClusterMetastoresAmbari</a>

---


### HdinsightKafkaClusterMetastoresHiveOutputReference <a name="HdinsightKafkaClusterMetastoresHiveOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.Initializer"></a>

```typescript
import { hdinsightKafkaCluster } from '@cdktf/provider-azurerm'

new hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.serverInput">serverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.server">server</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive">HdinsightKafkaClusterMetastoresHive</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `serverInput`<sup>Optional</sup> <a name="serverInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.serverInput"></a>

```typescript
public readonly serverInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.server"></a>

```typescript
public readonly server: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HdinsightKafkaClusterMetastoresHive;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive">HdinsightKafkaClusterMetastoresHive</a>

---


### HdinsightKafkaClusterMetastoresOozieOutputReference <a name="HdinsightKafkaClusterMetastoresOozieOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.Initializer"></a>

```typescript
import { hdinsightKafkaCluster } from '@cdktf/provider-azurerm'

new hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.serverInput">serverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.server">server</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie">HdinsightKafkaClusterMetastoresOozie</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `serverInput`<sup>Optional</sup> <a name="serverInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.serverInput"></a>

```typescript
public readonly serverInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.server"></a>

```typescript
public readonly server: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HdinsightKafkaClusterMetastoresOozie;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie">HdinsightKafkaClusterMetastoresOozie</a>

---


### HdinsightKafkaClusterMetastoresOutputReference <a name="HdinsightKafkaClusterMetastoresOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.Initializer"></a>

```typescript
import { hdinsightKafkaCluster } from '@cdktf/provider-azurerm'

new hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.putAmbari">putAmbari</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.putHive">putHive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.putOozie">putOozie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.resetAmbari">resetAmbari</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.resetHive">resetHive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.resetOozie">resetOozie</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAmbari` <a name="putAmbari" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.putAmbari"></a>

```typescript
public putAmbari(value: HdinsightKafkaClusterMetastoresAmbari): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.putAmbari.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari">HdinsightKafkaClusterMetastoresAmbari</a>

---

##### `putHive` <a name="putHive" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.putHive"></a>

```typescript
public putHive(value: HdinsightKafkaClusterMetastoresHive): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.putHive.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive">HdinsightKafkaClusterMetastoresHive</a>

---

##### `putOozie` <a name="putOozie" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.putOozie"></a>

```typescript
public putOozie(value: HdinsightKafkaClusterMetastoresOozie): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.putOozie.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie">HdinsightKafkaClusterMetastoresOozie</a>

---

##### `resetAmbari` <a name="resetAmbari" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.resetAmbari"></a>

```typescript
public resetAmbari(): void
```

##### `resetHive` <a name="resetHive" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.resetHive"></a>

```typescript
public resetHive(): void
```

##### `resetOozie` <a name="resetOozie" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.resetOozie"></a>

```typescript
public resetOozie(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.ambari">ambari</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference">HdinsightKafkaClusterMetastoresAmbariOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.hive">hive</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference">HdinsightKafkaClusterMetastoresHiveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.oozie">oozie</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference">HdinsightKafkaClusterMetastoresOozieOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.ambariInput">ambariInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari">HdinsightKafkaClusterMetastoresAmbari</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.hiveInput">hiveInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive">HdinsightKafkaClusterMetastoresHive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.oozieInput">oozieInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie">HdinsightKafkaClusterMetastoresOozie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores">HdinsightKafkaClusterMetastores</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ambari`<sup>Required</sup> <a name="ambari" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.ambari"></a>

```typescript
public readonly ambari: HdinsightKafkaClusterMetastoresAmbariOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference">HdinsightKafkaClusterMetastoresAmbariOutputReference</a>

---

##### `hive`<sup>Required</sup> <a name="hive" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.hive"></a>

```typescript
public readonly hive: HdinsightKafkaClusterMetastoresHiveOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference">HdinsightKafkaClusterMetastoresHiveOutputReference</a>

---

##### `oozie`<sup>Required</sup> <a name="oozie" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.oozie"></a>

```typescript
public readonly oozie: HdinsightKafkaClusterMetastoresOozieOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference">HdinsightKafkaClusterMetastoresOozieOutputReference</a>

---

##### `ambariInput`<sup>Optional</sup> <a name="ambariInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.ambariInput"></a>

```typescript
public readonly ambariInput: HdinsightKafkaClusterMetastoresAmbari;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari">HdinsightKafkaClusterMetastoresAmbari</a>

---

##### `hiveInput`<sup>Optional</sup> <a name="hiveInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.hiveInput"></a>

```typescript
public readonly hiveInput: HdinsightKafkaClusterMetastoresHive;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive">HdinsightKafkaClusterMetastoresHive</a>

---

##### `oozieInput`<sup>Optional</sup> <a name="oozieInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.oozieInput"></a>

```typescript
public readonly oozieInput: HdinsightKafkaClusterMetastoresOozie;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie">HdinsightKafkaClusterMetastoresOozie</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HdinsightKafkaClusterMetastores;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores">HdinsightKafkaClusterMetastores</a>

---


### HdinsightKafkaClusterMonitorOutputReference <a name="HdinsightKafkaClusterMonitorOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.Initializer"></a>

```typescript
import { hdinsightKafkaCluster } from '@cdktf/provider-azurerm'

new hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.property.logAnalyticsWorkspaceIdInput">logAnalyticsWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.property.primaryKeyInput">primaryKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.property.primaryKey">primaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitor">HdinsightKafkaClusterMonitor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="logAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.property.logAnalyticsWorkspaceIdInput"></a>

```typescript
public readonly logAnalyticsWorkspaceIdInput: string;
```

- *Type:* string

---

##### `primaryKeyInput`<sup>Optional</sup> <a name="primaryKeyInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.property.primaryKeyInput"></a>

```typescript
public readonly primaryKeyInput: string;
```

- *Type:* string

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.property.logAnalyticsWorkspaceId"></a>

```typescript
public readonly logAnalyticsWorkspaceId: string;
```

- *Type:* string

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.property.primaryKey"></a>

```typescript
public readonly primaryKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HdinsightKafkaClusterMonitor;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitor">HdinsightKafkaClusterMonitor</a>

---


### HdinsightKafkaClusterNetworkOutputReference <a name="HdinsightKafkaClusterNetworkOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.Initializer"></a>

```typescript
import { hdinsightKafkaCluster } from '@cdktf/provider-azurerm'

new hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.resetConnectionDirection">resetConnectionDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.resetPrivateLinkEnabled">resetPrivateLinkEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectionDirection` <a name="resetConnectionDirection" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.resetConnectionDirection"></a>

```typescript
public resetConnectionDirection(): void
```

##### `resetPrivateLinkEnabled` <a name="resetPrivateLinkEnabled" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.resetPrivateLinkEnabled"></a>

```typescript
public resetPrivateLinkEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.property.connectionDirectionInput">connectionDirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.property.privateLinkEnabledInput">privateLinkEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.property.connectionDirection">connectionDirection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.property.privateLinkEnabled">privateLinkEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetwork">HdinsightKafkaClusterNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionDirectionInput`<sup>Optional</sup> <a name="connectionDirectionInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.property.connectionDirectionInput"></a>

```typescript
public readonly connectionDirectionInput: string;
```

- *Type:* string

---

##### `privateLinkEnabledInput`<sup>Optional</sup> <a name="privateLinkEnabledInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.property.privateLinkEnabledInput"></a>

```typescript
public readonly privateLinkEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `connectionDirection`<sup>Required</sup> <a name="connectionDirection" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.property.connectionDirection"></a>

```typescript
public readonly connectionDirection: string;
```

- *Type:* string

---

##### `privateLinkEnabled`<sup>Required</sup> <a name="privateLinkEnabled" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.property.privateLinkEnabled"></a>

```typescript
public readonly privateLinkEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HdinsightKafkaClusterNetwork;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetwork">HdinsightKafkaClusterNetwork</a>

---


### HdinsightKafkaClusterRestProxyOutputReference <a name="HdinsightKafkaClusterRestProxyOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.Initializer"></a>

```typescript
import { hdinsightKafkaCluster } from '@cdktf/provider-azurerm'

new hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.property.securityGroupIdInput">securityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.property.securityGroupNameInput">securityGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.property.securityGroupId">securityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.property.securityGroupName">securityGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxy">HdinsightKafkaClusterRestProxy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroupIdInput`<sup>Optional</sup> <a name="securityGroupIdInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.property.securityGroupIdInput"></a>

```typescript
public readonly securityGroupIdInput: string;
```

- *Type:* string

---

##### `securityGroupNameInput`<sup>Optional</sup> <a name="securityGroupNameInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.property.securityGroupNameInput"></a>

```typescript
public readonly securityGroupNameInput: string;
```

- *Type:* string

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.property.securityGroupId"></a>

```typescript
public readonly securityGroupId: string;
```

- *Type:* string

---

##### `securityGroupName`<sup>Required</sup> <a name="securityGroupName" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.property.securityGroupName"></a>

```typescript
public readonly securityGroupName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HdinsightKafkaClusterRestProxy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxy">HdinsightKafkaClusterRestProxy</a>

---


### HdinsightKafkaClusterRolesHeadNodeOutputReference <a name="HdinsightKafkaClusterRolesHeadNodeOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.Initializer"></a>

```typescript
import { hdinsightKafkaCluster } from '@cdktf/provider-azurerm'

new hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.putScriptActions">putScriptActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.resetScriptActions">resetScriptActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.resetSshKeys">resetSshKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.resetVirtualNetworkId">resetVirtualNetworkId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScriptActions` <a name="putScriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.putScriptActions"></a>

```typescript
public putScriptActions(value: IResolvable | HdinsightKafkaClusterRolesHeadNodeScriptActions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.putScriptActions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions">HdinsightKafkaClusterRolesHeadNodeScriptActions</a>[]

---

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetScriptActions` <a name="resetScriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.resetScriptActions"></a>

```typescript
public resetScriptActions(): void
```

##### `resetSshKeys` <a name="resetSshKeys" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.resetSshKeys"></a>

```typescript
public resetSshKeys(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```

##### `resetVirtualNetworkId` <a name="resetVirtualNetworkId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.resetVirtualNetworkId"></a>

```typescript
public resetVirtualNetworkId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.scriptActions">scriptActions</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList">HdinsightKafkaClusterRolesHeadNodeScriptActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.scriptActionsInput">scriptActionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions">HdinsightKafkaClusterRolesHeadNodeScriptActions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.sshKeysInput">sshKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.virtualNetworkIdInput">virtualNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.vmSizeInput">vmSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.sshKeys">sshKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.virtualNetworkId">virtualNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.vmSize">vmSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode">HdinsightKafkaClusterRolesHeadNode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scriptActions`<sup>Required</sup> <a name="scriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.scriptActions"></a>

```typescript
public readonly scriptActions: HdinsightKafkaClusterRolesHeadNodeScriptActionsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList">HdinsightKafkaClusterRolesHeadNodeScriptActionsList</a>

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `scriptActionsInput`<sup>Optional</sup> <a name="scriptActionsInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.scriptActionsInput"></a>

```typescript
public readonly scriptActionsInput: IResolvable | HdinsightKafkaClusterRolesHeadNodeScriptActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions">HdinsightKafkaClusterRolesHeadNodeScriptActions</a>[]

---

##### `sshKeysInput`<sup>Optional</sup> <a name="sshKeysInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.sshKeysInput"></a>

```typescript
public readonly sshKeysInput: string[];
```

- *Type:* string[]

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `virtualNetworkIdInput`<sup>Optional</sup> <a name="virtualNetworkIdInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.virtualNetworkIdInput"></a>

```typescript
public readonly virtualNetworkIdInput: string;
```

- *Type:* string

---

##### `vmSizeInput`<sup>Optional</sup> <a name="vmSizeInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.vmSizeInput"></a>

```typescript
public readonly vmSizeInput: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `sshKeys`<sup>Required</sup> <a name="sshKeys" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.sshKeys"></a>

```typescript
public readonly sshKeys: string[];
```

- *Type:* string[]

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.virtualNetworkId"></a>

```typescript
public readonly virtualNetworkId: string;
```

- *Type:* string

---

##### `vmSize`<sup>Required</sup> <a name="vmSize" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.vmSize"></a>

```typescript
public readonly vmSize: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HdinsightKafkaClusterRolesHeadNode;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode">HdinsightKafkaClusterRolesHeadNode</a>

---


### HdinsightKafkaClusterRolesHeadNodeScriptActionsList <a name="HdinsightKafkaClusterRolesHeadNodeScriptActionsList" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.Initializer"></a>

```typescript
import { hdinsightKafkaCluster } from '@cdktf/provider-azurerm'

new hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.get"></a>

```typescript
public get(index: number): HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions">HdinsightKafkaClusterRolesHeadNodeScriptActions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HdinsightKafkaClusterRolesHeadNodeScriptActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions">HdinsightKafkaClusterRolesHeadNodeScriptActions</a>[]

---


### HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference <a name="HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.Initializer"></a>

```typescript
import { hdinsightKafkaCluster } from '@cdktf/provider-azurerm'

new hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.parametersInput">parametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.parameters">parameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions">HdinsightKafkaClusterRolesHeadNodeScriptActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: string;
```

- *Type:* string

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.parameters"></a>

```typescript
public readonly parameters: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HdinsightKafkaClusterRolesHeadNodeScriptActions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions">HdinsightKafkaClusterRolesHeadNodeScriptActions</a>

---


### HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference <a name="HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.Initializer"></a>

```typescript
import { hdinsightKafkaCluster } from '@cdktf/provider-azurerm'

new hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.putScriptActions">putScriptActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.resetScriptActions">resetScriptActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.resetSshKeys">resetSshKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.resetVirtualNetworkId">resetVirtualNetworkId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScriptActions` <a name="putScriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.putScriptActions"></a>

```typescript
public putScriptActions(value: IResolvable | HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.putScriptActions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions">HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions</a>[]

---

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetScriptActions` <a name="resetScriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.resetScriptActions"></a>

```typescript
public resetScriptActions(): void
```

##### `resetSshKeys` <a name="resetSshKeys" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.resetSshKeys"></a>

```typescript
public resetSshKeys(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```

##### `resetVirtualNetworkId` <a name="resetVirtualNetworkId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.resetVirtualNetworkId"></a>

```typescript
public resetVirtualNetworkId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.scriptActions">scriptActions</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList">HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.scriptActionsInput">scriptActionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions">HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.sshKeysInput">sshKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.virtualNetworkIdInput">virtualNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.vmSizeInput">vmSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.sshKeys">sshKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.virtualNetworkId">virtualNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.vmSize">vmSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode">HdinsightKafkaClusterRolesKafkaManagementNode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scriptActions`<sup>Required</sup> <a name="scriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.scriptActions"></a>

```typescript
public readonly scriptActions: HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList">HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList</a>

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `scriptActionsInput`<sup>Optional</sup> <a name="scriptActionsInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.scriptActionsInput"></a>

```typescript
public readonly scriptActionsInput: IResolvable | HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions">HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions</a>[]

---

##### `sshKeysInput`<sup>Optional</sup> <a name="sshKeysInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.sshKeysInput"></a>

```typescript
public readonly sshKeysInput: string[];
```

- *Type:* string[]

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `virtualNetworkIdInput`<sup>Optional</sup> <a name="virtualNetworkIdInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.virtualNetworkIdInput"></a>

```typescript
public readonly virtualNetworkIdInput: string;
```

- *Type:* string

---

##### `vmSizeInput`<sup>Optional</sup> <a name="vmSizeInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.vmSizeInput"></a>

```typescript
public readonly vmSizeInput: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `sshKeys`<sup>Required</sup> <a name="sshKeys" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.sshKeys"></a>

```typescript
public readonly sshKeys: string[];
```

- *Type:* string[]

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.virtualNetworkId"></a>

```typescript
public readonly virtualNetworkId: string;
```

- *Type:* string

---

##### `vmSize`<sup>Required</sup> <a name="vmSize" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.vmSize"></a>

```typescript
public readonly vmSize: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HdinsightKafkaClusterRolesKafkaManagementNode;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode">HdinsightKafkaClusterRolesKafkaManagementNode</a>

---


### HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList <a name="HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.Initializer"></a>

```typescript
import { hdinsightKafkaCluster } from '@cdktf/provider-azurerm'

new hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.get"></a>

```typescript
public get(index: number): HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions">HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions">HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions</a>[]

---


### HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference <a name="HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.Initializer"></a>

```typescript
import { hdinsightKafkaCluster } from '@cdktf/provider-azurerm'

new hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.parametersInput">parametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.parameters">parameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions">HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: string;
```

- *Type:* string

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.parameters"></a>

```typescript
public readonly parameters: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions">HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions</a>

---


### HdinsightKafkaClusterRolesOutputReference <a name="HdinsightKafkaClusterRolesOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.Initializer"></a>

```typescript
import { hdinsightKafkaCluster } from '@cdktf/provider-azurerm'

new hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putHeadNode">putHeadNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putKafkaManagementNode">putKafkaManagementNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putWorkerNode">putWorkerNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putZookeeperNode">putZookeeperNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.resetKafkaManagementNode">resetKafkaManagementNode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeadNode` <a name="putHeadNode" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putHeadNode"></a>

```typescript
public putHeadNode(value: HdinsightKafkaClusterRolesHeadNode): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putHeadNode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode">HdinsightKafkaClusterRolesHeadNode</a>

---

##### `putKafkaManagementNode` <a name="putKafkaManagementNode" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putKafkaManagementNode"></a>

```typescript
public putKafkaManagementNode(value: HdinsightKafkaClusterRolesKafkaManagementNode): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putKafkaManagementNode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode">HdinsightKafkaClusterRolesKafkaManagementNode</a>

---

##### `putWorkerNode` <a name="putWorkerNode" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putWorkerNode"></a>

```typescript
public putWorkerNode(value: HdinsightKafkaClusterRolesWorkerNode): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putWorkerNode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode">HdinsightKafkaClusterRolesWorkerNode</a>

---

##### `putZookeeperNode` <a name="putZookeeperNode" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putZookeeperNode"></a>

```typescript
public putZookeeperNode(value: HdinsightKafkaClusterRolesZookeeperNode): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putZookeeperNode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode">HdinsightKafkaClusterRolesZookeeperNode</a>

---

##### `resetKafkaManagementNode` <a name="resetKafkaManagementNode" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.resetKafkaManagementNode"></a>

```typescript
public resetKafkaManagementNode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.headNode">headNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference">HdinsightKafkaClusterRolesHeadNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.kafkaManagementNode">kafkaManagementNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference">HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.workerNode">workerNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference">HdinsightKafkaClusterRolesWorkerNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.zookeeperNode">zookeeperNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference">HdinsightKafkaClusterRolesZookeeperNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.headNodeInput">headNodeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode">HdinsightKafkaClusterRolesHeadNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.kafkaManagementNodeInput">kafkaManagementNodeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode">HdinsightKafkaClusterRolesKafkaManagementNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.workerNodeInput">workerNodeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode">HdinsightKafkaClusterRolesWorkerNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.zookeeperNodeInput">zookeeperNodeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode">HdinsightKafkaClusterRolesZookeeperNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles">HdinsightKafkaClusterRoles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headNode`<sup>Required</sup> <a name="headNode" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.headNode"></a>

```typescript
public readonly headNode: HdinsightKafkaClusterRolesHeadNodeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference">HdinsightKafkaClusterRolesHeadNodeOutputReference</a>

---

##### `kafkaManagementNode`<sup>Required</sup> <a name="kafkaManagementNode" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.kafkaManagementNode"></a>

```typescript
public readonly kafkaManagementNode: HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference">HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference</a>

---

##### `workerNode`<sup>Required</sup> <a name="workerNode" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.workerNode"></a>

```typescript
public readonly workerNode: HdinsightKafkaClusterRolesWorkerNodeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference">HdinsightKafkaClusterRolesWorkerNodeOutputReference</a>

---

##### `zookeeperNode`<sup>Required</sup> <a name="zookeeperNode" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.zookeeperNode"></a>

```typescript
public readonly zookeeperNode: HdinsightKafkaClusterRolesZookeeperNodeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference">HdinsightKafkaClusterRolesZookeeperNodeOutputReference</a>

---

##### `headNodeInput`<sup>Optional</sup> <a name="headNodeInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.headNodeInput"></a>

```typescript
public readonly headNodeInput: HdinsightKafkaClusterRolesHeadNode;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode">HdinsightKafkaClusterRolesHeadNode</a>

---

##### `kafkaManagementNodeInput`<sup>Optional</sup> <a name="kafkaManagementNodeInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.kafkaManagementNodeInput"></a>

```typescript
public readonly kafkaManagementNodeInput: HdinsightKafkaClusterRolesKafkaManagementNode;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode">HdinsightKafkaClusterRolesKafkaManagementNode</a>

---

##### `workerNodeInput`<sup>Optional</sup> <a name="workerNodeInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.workerNodeInput"></a>

```typescript
public readonly workerNodeInput: HdinsightKafkaClusterRolesWorkerNode;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode">HdinsightKafkaClusterRolesWorkerNode</a>

---

##### `zookeeperNodeInput`<sup>Optional</sup> <a name="zookeeperNodeInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.zookeeperNodeInput"></a>

```typescript
public readonly zookeeperNodeInput: HdinsightKafkaClusterRolesZookeeperNode;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode">HdinsightKafkaClusterRolesZookeeperNode</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HdinsightKafkaClusterRoles;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles">HdinsightKafkaClusterRoles</a>

---


### HdinsightKafkaClusterRolesWorkerNodeOutputReference <a name="HdinsightKafkaClusterRolesWorkerNodeOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.Initializer"></a>

```typescript
import { hdinsightKafkaCluster } from '@cdktf/provider-azurerm'

new hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.putScriptActions">putScriptActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.resetScriptActions">resetScriptActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.resetSshKeys">resetSshKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.resetVirtualNetworkId">resetVirtualNetworkId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScriptActions` <a name="putScriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.putScriptActions"></a>

```typescript
public putScriptActions(value: IResolvable | HdinsightKafkaClusterRolesWorkerNodeScriptActions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.putScriptActions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions">HdinsightKafkaClusterRolesWorkerNodeScriptActions</a>[]

---

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetScriptActions` <a name="resetScriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.resetScriptActions"></a>

```typescript
public resetScriptActions(): void
```

##### `resetSshKeys` <a name="resetSshKeys" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.resetSshKeys"></a>

```typescript
public resetSshKeys(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```

##### `resetVirtualNetworkId` <a name="resetVirtualNetworkId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.resetVirtualNetworkId"></a>

```typescript
public resetVirtualNetworkId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.scriptActions">scriptActions</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList">HdinsightKafkaClusterRolesWorkerNodeScriptActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.numberOfDisksPerNodeInput">numberOfDisksPerNodeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.scriptActionsInput">scriptActionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions">HdinsightKafkaClusterRolesWorkerNodeScriptActions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.sshKeysInput">sshKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.targetInstanceCountInput">targetInstanceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.virtualNetworkIdInput">virtualNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.vmSizeInput">vmSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.numberOfDisksPerNode">numberOfDisksPerNode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.sshKeys">sshKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.targetInstanceCount">targetInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.virtualNetworkId">virtualNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.vmSize">vmSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode">HdinsightKafkaClusterRolesWorkerNode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scriptActions`<sup>Required</sup> <a name="scriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.scriptActions"></a>

```typescript
public readonly scriptActions: HdinsightKafkaClusterRolesWorkerNodeScriptActionsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList">HdinsightKafkaClusterRolesWorkerNodeScriptActionsList</a>

---

##### `numberOfDisksPerNodeInput`<sup>Optional</sup> <a name="numberOfDisksPerNodeInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.numberOfDisksPerNodeInput"></a>

```typescript
public readonly numberOfDisksPerNodeInput: number;
```

- *Type:* number

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `scriptActionsInput`<sup>Optional</sup> <a name="scriptActionsInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.scriptActionsInput"></a>

```typescript
public readonly scriptActionsInput: IResolvable | HdinsightKafkaClusterRolesWorkerNodeScriptActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions">HdinsightKafkaClusterRolesWorkerNodeScriptActions</a>[]

---

##### `sshKeysInput`<sup>Optional</sup> <a name="sshKeysInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.sshKeysInput"></a>

```typescript
public readonly sshKeysInput: string[];
```

- *Type:* string[]

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `targetInstanceCountInput`<sup>Optional</sup> <a name="targetInstanceCountInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.targetInstanceCountInput"></a>

```typescript
public readonly targetInstanceCountInput: number;
```

- *Type:* number

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `virtualNetworkIdInput`<sup>Optional</sup> <a name="virtualNetworkIdInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.virtualNetworkIdInput"></a>

```typescript
public readonly virtualNetworkIdInput: string;
```

- *Type:* string

---

##### `vmSizeInput`<sup>Optional</sup> <a name="vmSizeInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.vmSizeInput"></a>

```typescript
public readonly vmSizeInput: string;
```

- *Type:* string

---

##### `numberOfDisksPerNode`<sup>Required</sup> <a name="numberOfDisksPerNode" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.numberOfDisksPerNode"></a>

```typescript
public readonly numberOfDisksPerNode: number;
```

- *Type:* number

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `sshKeys`<sup>Required</sup> <a name="sshKeys" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.sshKeys"></a>

```typescript
public readonly sshKeys: string[];
```

- *Type:* string[]

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `targetInstanceCount`<sup>Required</sup> <a name="targetInstanceCount" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.targetInstanceCount"></a>

```typescript
public readonly targetInstanceCount: number;
```

- *Type:* number

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.virtualNetworkId"></a>

```typescript
public readonly virtualNetworkId: string;
```

- *Type:* string

---

##### `vmSize`<sup>Required</sup> <a name="vmSize" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.vmSize"></a>

```typescript
public readonly vmSize: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HdinsightKafkaClusterRolesWorkerNode;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode">HdinsightKafkaClusterRolesWorkerNode</a>

---


### HdinsightKafkaClusterRolesWorkerNodeScriptActionsList <a name="HdinsightKafkaClusterRolesWorkerNodeScriptActionsList" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.Initializer"></a>

```typescript
import { hdinsightKafkaCluster } from '@cdktf/provider-azurerm'

new hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.get"></a>

```typescript
public get(index: number): HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions">HdinsightKafkaClusterRolesWorkerNodeScriptActions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HdinsightKafkaClusterRolesWorkerNodeScriptActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions">HdinsightKafkaClusterRolesWorkerNodeScriptActions</a>[]

---


### HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference <a name="HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.Initializer"></a>

```typescript
import { hdinsightKafkaCluster } from '@cdktf/provider-azurerm'

new hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.parametersInput">parametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.parameters">parameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions">HdinsightKafkaClusterRolesWorkerNodeScriptActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: string;
```

- *Type:* string

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.parameters"></a>

```typescript
public readonly parameters: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HdinsightKafkaClusterRolesWorkerNodeScriptActions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions">HdinsightKafkaClusterRolesWorkerNodeScriptActions</a>

---


### HdinsightKafkaClusterRolesZookeeperNodeOutputReference <a name="HdinsightKafkaClusterRolesZookeeperNodeOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.Initializer"></a>

```typescript
import { hdinsightKafkaCluster } from '@cdktf/provider-azurerm'

new hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.putScriptActions">putScriptActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.resetScriptActions">resetScriptActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.resetSshKeys">resetSshKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.resetVirtualNetworkId">resetVirtualNetworkId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScriptActions` <a name="putScriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.putScriptActions"></a>

```typescript
public putScriptActions(value: IResolvable | HdinsightKafkaClusterRolesZookeeperNodeScriptActions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.putScriptActions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions">HdinsightKafkaClusterRolesZookeeperNodeScriptActions</a>[]

---

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetScriptActions` <a name="resetScriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.resetScriptActions"></a>

```typescript
public resetScriptActions(): void
```

##### `resetSshKeys` <a name="resetSshKeys" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.resetSshKeys"></a>

```typescript
public resetSshKeys(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```

##### `resetVirtualNetworkId` <a name="resetVirtualNetworkId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.resetVirtualNetworkId"></a>

```typescript
public resetVirtualNetworkId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.scriptActions">scriptActions</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList">HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.scriptActionsInput">scriptActionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions">HdinsightKafkaClusterRolesZookeeperNodeScriptActions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.sshKeysInput">sshKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.virtualNetworkIdInput">virtualNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.vmSizeInput">vmSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.sshKeys">sshKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.virtualNetworkId">virtualNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.vmSize">vmSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode">HdinsightKafkaClusterRolesZookeeperNode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scriptActions`<sup>Required</sup> <a name="scriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.scriptActions"></a>

```typescript
public readonly scriptActions: HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList">HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList</a>

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `scriptActionsInput`<sup>Optional</sup> <a name="scriptActionsInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.scriptActionsInput"></a>

```typescript
public readonly scriptActionsInput: IResolvable | HdinsightKafkaClusterRolesZookeeperNodeScriptActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions">HdinsightKafkaClusterRolesZookeeperNodeScriptActions</a>[]

---

##### `sshKeysInput`<sup>Optional</sup> <a name="sshKeysInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.sshKeysInput"></a>

```typescript
public readonly sshKeysInput: string[];
```

- *Type:* string[]

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `virtualNetworkIdInput`<sup>Optional</sup> <a name="virtualNetworkIdInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.virtualNetworkIdInput"></a>

```typescript
public readonly virtualNetworkIdInput: string;
```

- *Type:* string

---

##### `vmSizeInput`<sup>Optional</sup> <a name="vmSizeInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.vmSizeInput"></a>

```typescript
public readonly vmSizeInput: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `sshKeys`<sup>Required</sup> <a name="sshKeys" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.sshKeys"></a>

```typescript
public readonly sshKeys: string[];
```

- *Type:* string[]

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.virtualNetworkId"></a>

```typescript
public readonly virtualNetworkId: string;
```

- *Type:* string

---

##### `vmSize`<sup>Required</sup> <a name="vmSize" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.vmSize"></a>

```typescript
public readonly vmSize: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HdinsightKafkaClusterRolesZookeeperNode;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode">HdinsightKafkaClusterRolesZookeeperNode</a>

---


### HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList <a name="HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.Initializer"></a>

```typescript
import { hdinsightKafkaCluster } from '@cdktf/provider-azurerm'

new hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.get"></a>

```typescript
public get(index: number): HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions">HdinsightKafkaClusterRolesZookeeperNodeScriptActions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HdinsightKafkaClusterRolesZookeeperNodeScriptActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions">HdinsightKafkaClusterRolesZookeeperNodeScriptActions</a>[]

---


### HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference <a name="HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer"></a>

```typescript
import { hdinsightKafkaCluster } from '@cdktf/provider-azurerm'

new hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.parametersInput">parametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.parameters">parameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions">HdinsightKafkaClusterRolesZookeeperNodeScriptActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: string;
```

- *Type:* string

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.parameters"></a>

```typescript
public readonly parameters: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HdinsightKafkaClusterRolesZookeeperNodeScriptActions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions">HdinsightKafkaClusterRolesZookeeperNodeScriptActions</a>

---


### HdinsightKafkaClusterSecurityProfileOutputReference <a name="HdinsightKafkaClusterSecurityProfileOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.Initializer"></a>

```typescript
import { hdinsightKafkaCluster } from '@cdktf/provider-azurerm'

new hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.resetClusterUsersGroupDns">resetClusterUsersGroupDns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClusterUsersGroupDns` <a name="resetClusterUsersGroupDns" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.resetClusterUsersGroupDns"></a>

```typescript
public resetClusterUsersGroupDns(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.aaddsResourceIdInput">aaddsResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.clusterUsersGroupDnsInput">clusterUsersGroupDnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.domainUsernameInput">domainUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.domainUserPasswordInput">domainUserPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.ldapsUrlsInput">ldapsUrlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.msiResourceIdInput">msiResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.aaddsResourceId">aaddsResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.clusterUsersGroupDns">clusterUsersGroupDns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.domainUsername">domainUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.domainUserPassword">domainUserPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.ldapsUrls">ldapsUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.msiResourceId">msiResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile">HdinsightKafkaClusterSecurityProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aaddsResourceIdInput`<sup>Optional</sup> <a name="aaddsResourceIdInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.aaddsResourceIdInput"></a>

```typescript
public readonly aaddsResourceIdInput: string;
```

- *Type:* string

---

##### `clusterUsersGroupDnsInput`<sup>Optional</sup> <a name="clusterUsersGroupDnsInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.clusterUsersGroupDnsInput"></a>

```typescript
public readonly clusterUsersGroupDnsInput: string[];
```

- *Type:* string[]

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `domainUsernameInput`<sup>Optional</sup> <a name="domainUsernameInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.domainUsernameInput"></a>

```typescript
public readonly domainUsernameInput: string;
```

- *Type:* string

---

##### `domainUserPasswordInput`<sup>Optional</sup> <a name="domainUserPasswordInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.domainUserPasswordInput"></a>

```typescript
public readonly domainUserPasswordInput: string;
```

- *Type:* string

---

##### `ldapsUrlsInput`<sup>Optional</sup> <a name="ldapsUrlsInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.ldapsUrlsInput"></a>

```typescript
public readonly ldapsUrlsInput: string[];
```

- *Type:* string[]

---

##### `msiResourceIdInput`<sup>Optional</sup> <a name="msiResourceIdInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.msiResourceIdInput"></a>

```typescript
public readonly msiResourceIdInput: string;
```

- *Type:* string

---

##### `aaddsResourceId`<sup>Required</sup> <a name="aaddsResourceId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.aaddsResourceId"></a>

```typescript
public readonly aaddsResourceId: string;
```

- *Type:* string

---

##### `clusterUsersGroupDns`<sup>Required</sup> <a name="clusterUsersGroupDns" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.clusterUsersGroupDns"></a>

```typescript
public readonly clusterUsersGroupDns: string[];
```

- *Type:* string[]

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `domainUsername`<sup>Required</sup> <a name="domainUsername" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.domainUsername"></a>

```typescript
public readonly domainUsername: string;
```

- *Type:* string

---

##### `domainUserPassword`<sup>Required</sup> <a name="domainUserPassword" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.domainUserPassword"></a>

```typescript
public readonly domainUserPassword: string;
```

- *Type:* string

---

##### `ldapsUrls`<sup>Required</sup> <a name="ldapsUrls" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.ldapsUrls"></a>

```typescript
public readonly ldapsUrls: string[];
```

- *Type:* string[]

---

##### `msiResourceId`<sup>Required</sup> <a name="msiResourceId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.msiResourceId"></a>

```typescript
public readonly msiResourceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HdinsightKafkaClusterSecurityProfile;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile">HdinsightKafkaClusterSecurityProfile</a>

---


### HdinsightKafkaClusterStorageAccountGen2OutputReference <a name="HdinsightKafkaClusterStorageAccountGen2OutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.Initializer"></a>

```typescript
import { hdinsightKafkaCluster } from '@cdktf/provider-azurerm'

new hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.filesystemIdInput">filesystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.isDefaultInput">isDefaultInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.managedIdentityResourceIdInput">managedIdentityResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.storageResourceIdInput">storageResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.filesystemId">filesystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.isDefault">isDefault</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.managedIdentityResourceId">managedIdentityResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.storageResourceId">storageResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2">HdinsightKafkaClusterStorageAccountGen2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filesystemIdInput`<sup>Optional</sup> <a name="filesystemIdInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.filesystemIdInput"></a>

```typescript
public readonly filesystemIdInput: string;
```

- *Type:* string

---

##### `isDefaultInput`<sup>Optional</sup> <a name="isDefaultInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.isDefaultInput"></a>

```typescript
public readonly isDefaultInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `managedIdentityResourceIdInput`<sup>Optional</sup> <a name="managedIdentityResourceIdInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.managedIdentityResourceIdInput"></a>

```typescript
public readonly managedIdentityResourceIdInput: string;
```

- *Type:* string

---

##### `storageResourceIdInput`<sup>Optional</sup> <a name="storageResourceIdInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.storageResourceIdInput"></a>

```typescript
public readonly storageResourceIdInput: string;
```

- *Type:* string

---

##### `filesystemId`<sup>Required</sup> <a name="filesystemId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.filesystemId"></a>

```typescript
public readonly filesystemId: string;
```

- *Type:* string

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.isDefault"></a>

```typescript
public readonly isDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `managedIdentityResourceId`<sup>Required</sup> <a name="managedIdentityResourceId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.managedIdentityResourceId"></a>

```typescript
public readonly managedIdentityResourceId: string;
```

- *Type:* string

---

##### `storageResourceId`<sup>Required</sup> <a name="storageResourceId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.storageResourceId"></a>

```typescript
public readonly storageResourceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HdinsightKafkaClusterStorageAccountGen2;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2">HdinsightKafkaClusterStorageAccountGen2</a>

---


### HdinsightKafkaClusterStorageAccountList <a name="HdinsightKafkaClusterStorageAccountList" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.Initializer"></a>

```typescript
import { hdinsightKafkaCluster } from '@cdktf/provider-azurerm'

new hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.get"></a>

```typescript
public get(index: number): HdinsightKafkaClusterStorageAccountOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount">HdinsightKafkaClusterStorageAccount</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HdinsightKafkaClusterStorageAccount[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount">HdinsightKafkaClusterStorageAccount</a>[]

---


### HdinsightKafkaClusterStorageAccountOutputReference <a name="HdinsightKafkaClusterStorageAccountOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.Initializer"></a>

```typescript
import { hdinsightKafkaCluster } from '@cdktf/provider-azurerm'

new hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.resetStorageResourceId">resetStorageResourceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStorageResourceId` <a name="resetStorageResourceId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.resetStorageResourceId"></a>

```typescript
public resetStorageResourceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.isDefaultInput">isDefaultInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.storageAccountKeyInput">storageAccountKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.storageContainerIdInput">storageContainerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.storageResourceIdInput">storageResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.isDefault">isDefault</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.storageAccountKey">storageAccountKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.storageContainerId">storageContainerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.storageResourceId">storageResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount">HdinsightKafkaClusterStorageAccount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isDefaultInput`<sup>Optional</sup> <a name="isDefaultInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.isDefaultInput"></a>

```typescript
public readonly isDefaultInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `storageAccountKeyInput`<sup>Optional</sup> <a name="storageAccountKeyInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.storageAccountKeyInput"></a>

```typescript
public readonly storageAccountKeyInput: string;
```

- *Type:* string

---

##### `storageContainerIdInput`<sup>Optional</sup> <a name="storageContainerIdInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.storageContainerIdInput"></a>

```typescript
public readonly storageContainerIdInput: string;
```

- *Type:* string

---

##### `storageResourceIdInput`<sup>Optional</sup> <a name="storageResourceIdInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.storageResourceIdInput"></a>

```typescript
public readonly storageResourceIdInput: string;
```

- *Type:* string

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.isDefault"></a>

```typescript
public readonly isDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `storageAccountKey`<sup>Required</sup> <a name="storageAccountKey" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.storageAccountKey"></a>

```typescript
public readonly storageAccountKey: string;
```

- *Type:* string

---

##### `storageContainerId`<sup>Required</sup> <a name="storageContainerId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.storageContainerId"></a>

```typescript
public readonly storageContainerId: string;
```

- *Type:* string

---

##### `storageResourceId`<sup>Required</sup> <a name="storageResourceId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.storageResourceId"></a>

```typescript
public readonly storageResourceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HdinsightKafkaClusterStorageAccount;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount">HdinsightKafkaClusterStorageAccount</a>

---


### HdinsightKafkaClusterTimeoutsOutputReference <a name="HdinsightKafkaClusterTimeoutsOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.Initializer"></a>

```typescript
import { hdinsightKafkaCluster } from '@cdktf/provider-azurerm'

new hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts">HdinsightKafkaClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HdinsightKafkaClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts">HdinsightKafkaClusterTimeouts</a>

---



