# `serviceFabricCluster` Submodule <a name="`serviceFabricCluster` Submodule" id="@cdktf/provider-azurerm.serviceFabricCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceFabricCluster <a name="ServiceFabricCluster" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster azurerm_service_fabric_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer"></a>

```typescript
import { serviceFabricCluster } from '@cdktf/provider-azurerm'

new serviceFabricCluster.ServiceFabricCluster(scope: Construct, id: string, config: ServiceFabricClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig">ServiceFabricClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig">ServiceFabricClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putAzureActiveDirectory">putAzureActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putCertificate">putCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putCertificateCommonNames">putCertificateCommonNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putClientCertificateCommonName">putClientCertificateCommonName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putClientCertificateThumbprint">putClientCertificateThumbprint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putDiagnosticsConfig">putDiagnosticsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putFabricSettings">putFabricSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putNodeType">putNodeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putReverseProxyCertificate">putReverseProxyCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putReverseProxyCertificateCommonNames">putReverseProxyCertificateCommonNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putUpgradePolicy">putUpgradePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetAddOnFeatures">resetAddOnFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetAzureActiveDirectory">resetAzureActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetCertificateCommonNames">resetCertificateCommonNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetClientCertificateCommonName">resetClientCertificateCommonName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetClientCertificateThumbprint">resetClientCertificateThumbprint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetClusterCodeVersion">resetClusterCodeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetDiagnosticsConfig">resetDiagnosticsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetFabricSettings">resetFabricSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetReverseProxyCertificate">resetReverseProxyCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetReverseProxyCertificateCommonNames">resetReverseProxyCertificateCommonNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetServiceFabricZonalUpgradeMode">resetServiceFabricZonalUpgradeMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetUpgradePolicy">resetUpgradePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetVmssZonalUpgradeMode">resetVmssZonalUpgradeMode</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAzureActiveDirectory` <a name="putAzureActiveDirectory" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putAzureActiveDirectory"></a>

```typescript
public putAzureActiveDirectory(value: ServiceFabricClusterAzureActiveDirectory): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putAzureActiveDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectory">ServiceFabricClusterAzureActiveDirectory</a>

---

##### `putCertificate` <a name="putCertificate" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putCertificate"></a>

```typescript
public putCertificate(value: ServiceFabricClusterCertificate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putCertificate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificate">ServiceFabricClusterCertificate</a>

---

##### `putCertificateCommonNames` <a name="putCertificateCommonNames" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putCertificateCommonNames"></a>

```typescript
public putCertificateCommonNames(value: ServiceFabricClusterCertificateCommonNames): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putCertificateCommonNames.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNames">ServiceFabricClusterCertificateCommonNames</a>

---

##### `putClientCertificateCommonName` <a name="putClientCertificateCommonName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putClientCertificateCommonName"></a>

```typescript
public putClientCertificateCommonName(value: IResolvable | ServiceFabricClusterClientCertificateCommonName[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putClientCertificateCommonName.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonName">ServiceFabricClusterClientCertificateCommonName</a>[]

---

##### `putClientCertificateThumbprint` <a name="putClientCertificateThumbprint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putClientCertificateThumbprint"></a>

```typescript
public putClientCertificateThumbprint(value: IResolvable | ServiceFabricClusterClientCertificateThumbprint[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putClientCertificateThumbprint.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprint">ServiceFabricClusterClientCertificateThumbprint</a>[]

---

##### `putDiagnosticsConfig` <a name="putDiagnosticsConfig" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putDiagnosticsConfig"></a>

```typescript
public putDiagnosticsConfig(value: ServiceFabricClusterDiagnosticsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putDiagnosticsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfig">ServiceFabricClusterDiagnosticsConfig</a>

---

##### `putFabricSettings` <a name="putFabricSettings" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putFabricSettings"></a>

```typescript
public putFabricSettings(value: IResolvable | ServiceFabricClusterFabricSettings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putFabricSettings.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettings">ServiceFabricClusterFabricSettings</a>[]

---

##### `putNodeType` <a name="putNodeType" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putNodeType"></a>

```typescript
public putNodeType(value: IResolvable | ServiceFabricClusterNodeType[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putNodeType.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType">ServiceFabricClusterNodeType</a>[]

---

##### `putReverseProxyCertificate` <a name="putReverseProxyCertificate" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putReverseProxyCertificate"></a>

```typescript
public putReverseProxyCertificate(value: ServiceFabricClusterReverseProxyCertificate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putReverseProxyCertificate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificate">ServiceFabricClusterReverseProxyCertificate</a>

---

##### `putReverseProxyCertificateCommonNames` <a name="putReverseProxyCertificateCommonNames" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putReverseProxyCertificateCommonNames"></a>

```typescript
public putReverseProxyCertificateCommonNames(value: ServiceFabricClusterReverseProxyCertificateCommonNames): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putReverseProxyCertificateCommonNames.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNames">ServiceFabricClusterReverseProxyCertificateCommonNames</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putTimeouts"></a>

```typescript
public putTimeouts(value: ServiceFabricClusterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeouts">ServiceFabricClusterTimeouts</a>

---

##### `putUpgradePolicy` <a name="putUpgradePolicy" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putUpgradePolicy"></a>

```typescript
public putUpgradePolicy(value: ServiceFabricClusterUpgradePolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putUpgradePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy">ServiceFabricClusterUpgradePolicy</a>

---

##### `resetAddOnFeatures` <a name="resetAddOnFeatures" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetAddOnFeatures"></a>

```typescript
public resetAddOnFeatures(): void
```

##### `resetAzureActiveDirectory` <a name="resetAzureActiveDirectory" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetAzureActiveDirectory"></a>

```typescript
public resetAzureActiveDirectory(): void
```

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetCertificate"></a>

```typescript
public resetCertificate(): void
```

##### `resetCertificateCommonNames` <a name="resetCertificateCommonNames" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetCertificateCommonNames"></a>

```typescript
public resetCertificateCommonNames(): void
```

##### `resetClientCertificateCommonName` <a name="resetClientCertificateCommonName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetClientCertificateCommonName"></a>

```typescript
public resetClientCertificateCommonName(): void
```

##### `resetClientCertificateThumbprint` <a name="resetClientCertificateThumbprint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetClientCertificateThumbprint"></a>

```typescript
public resetClientCertificateThumbprint(): void
```

##### `resetClusterCodeVersion` <a name="resetClusterCodeVersion" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetClusterCodeVersion"></a>

```typescript
public resetClusterCodeVersion(): void
```

##### `resetDiagnosticsConfig` <a name="resetDiagnosticsConfig" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetDiagnosticsConfig"></a>

```typescript
public resetDiagnosticsConfig(): void
```

##### `resetFabricSettings` <a name="resetFabricSettings" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetFabricSettings"></a>

```typescript
public resetFabricSettings(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetReverseProxyCertificate` <a name="resetReverseProxyCertificate" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetReverseProxyCertificate"></a>

```typescript
public resetReverseProxyCertificate(): void
```

##### `resetReverseProxyCertificateCommonNames` <a name="resetReverseProxyCertificateCommonNames" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetReverseProxyCertificateCommonNames"></a>

```typescript
public resetReverseProxyCertificateCommonNames(): void
```

##### `resetServiceFabricZonalUpgradeMode` <a name="resetServiceFabricZonalUpgradeMode" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetServiceFabricZonalUpgradeMode"></a>

```typescript
public resetServiceFabricZonalUpgradeMode(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUpgradePolicy` <a name="resetUpgradePolicy" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetUpgradePolicy"></a>

```typescript
public resetUpgradePolicy(): void
```

##### `resetVmssZonalUpgradeMode` <a name="resetVmssZonalUpgradeMode" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetVmssZonalUpgradeMode"></a>

```typescript
public resetVmssZonalUpgradeMode(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ServiceFabricCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.isConstruct"></a>

```typescript
import { serviceFabricCluster } from '@cdktf/provider-azurerm'

serviceFabricCluster.ServiceFabricCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.isTerraformElement"></a>

```typescript
import { serviceFabricCluster } from '@cdktf/provider-azurerm'

serviceFabricCluster.ServiceFabricCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.isTerraformResource"></a>

```typescript
import { serviceFabricCluster } from '@cdktf/provider-azurerm'

serviceFabricCluster.ServiceFabricCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.generateConfigForImport"></a>

```typescript
import { serviceFabricCluster } from '@cdktf/provider-azurerm'

serviceFabricCluster.ServiceFabricCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ServiceFabricCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServiceFabricCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServiceFabricCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ServiceFabricCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.azureActiveDirectory">azureActiveDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference">ServiceFabricClusterAzureActiveDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.certificate">certificate</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference">ServiceFabricClusterCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.certificateCommonNames">certificateCommonNames</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference">ServiceFabricClusterCertificateCommonNamesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.clientCertificateCommonName">clientCertificateCommonName</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList">ServiceFabricClusterClientCertificateCommonNameList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.clientCertificateThumbprint">clientCertificateThumbprint</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList">ServiceFabricClusterClientCertificateThumbprintList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.clusterEndpoint">clusterEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.diagnosticsConfig">diagnosticsConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference">ServiceFabricClusterDiagnosticsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.fabricSettings">fabricSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList">ServiceFabricClusterFabricSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.nodeType">nodeType</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList">ServiceFabricClusterNodeTypeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.reverseProxyCertificate">reverseProxyCertificate</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference">ServiceFabricClusterReverseProxyCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.reverseProxyCertificateCommonNames">reverseProxyCertificateCommonNames</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference">ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference">ServiceFabricClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.upgradePolicy">upgradePolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference">ServiceFabricClusterUpgradePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.addOnFeaturesInput">addOnFeaturesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.azureActiveDirectoryInput">azureActiveDirectoryInput</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectory">ServiceFabricClusterAzureActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.certificateCommonNamesInput">certificateCommonNamesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNames">ServiceFabricClusterCertificateCommonNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.certificateInput">certificateInput</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificate">ServiceFabricClusterCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.clientCertificateCommonNameInput">clientCertificateCommonNameInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonName">ServiceFabricClusterClientCertificateCommonName</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.clientCertificateThumbprintInput">clientCertificateThumbprintInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprint">ServiceFabricClusterClientCertificateThumbprint</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.clusterCodeVersionInput">clusterCodeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.diagnosticsConfigInput">diagnosticsConfigInput</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfig">ServiceFabricClusterDiagnosticsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.fabricSettingsInput">fabricSettingsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettings">ServiceFabricClusterFabricSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.managementEndpointInput">managementEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.nodeTypeInput">nodeTypeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType">ServiceFabricClusterNodeType</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.reliabilityLevelInput">reliabilityLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.reverseProxyCertificateCommonNamesInput">reverseProxyCertificateCommonNamesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNames">ServiceFabricClusterReverseProxyCertificateCommonNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.reverseProxyCertificateInput">reverseProxyCertificateInput</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificate">ServiceFabricClusterReverseProxyCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.serviceFabricZonalUpgradeModeInput">serviceFabricZonalUpgradeModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeouts">ServiceFabricClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.upgradeModeInput">upgradeModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.upgradePolicyInput">upgradePolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy">ServiceFabricClusterUpgradePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.vmImageInput">vmImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.vmssZonalUpgradeModeInput">vmssZonalUpgradeModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.addOnFeatures">addOnFeatures</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.clusterCodeVersion">clusterCodeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.managementEndpoint">managementEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.reliabilityLevel">reliabilityLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.serviceFabricZonalUpgradeMode">serviceFabricZonalUpgradeMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.upgradeMode">upgradeMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.vmImage">vmImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.vmssZonalUpgradeMode">vmssZonalUpgradeMode</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `azureActiveDirectory`<sup>Required</sup> <a name="azureActiveDirectory" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.azureActiveDirectory"></a>

```typescript
public readonly azureActiveDirectory: ServiceFabricClusterAzureActiveDirectoryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference">ServiceFabricClusterAzureActiveDirectoryOutputReference</a>

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.certificate"></a>

```typescript
public readonly certificate: ServiceFabricClusterCertificateOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference">ServiceFabricClusterCertificateOutputReference</a>

---

##### `certificateCommonNames`<sup>Required</sup> <a name="certificateCommonNames" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.certificateCommonNames"></a>

```typescript
public readonly certificateCommonNames: ServiceFabricClusterCertificateCommonNamesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference">ServiceFabricClusterCertificateCommonNamesOutputReference</a>

---

##### `clientCertificateCommonName`<sup>Required</sup> <a name="clientCertificateCommonName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.clientCertificateCommonName"></a>

```typescript
public readonly clientCertificateCommonName: ServiceFabricClusterClientCertificateCommonNameList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList">ServiceFabricClusterClientCertificateCommonNameList</a>

---

##### `clientCertificateThumbprint`<sup>Required</sup> <a name="clientCertificateThumbprint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.clientCertificateThumbprint"></a>

```typescript
public readonly clientCertificateThumbprint: ServiceFabricClusterClientCertificateThumbprintList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList">ServiceFabricClusterClientCertificateThumbprintList</a>

---

##### `clusterEndpoint`<sup>Required</sup> <a name="clusterEndpoint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.clusterEndpoint"></a>

```typescript
public readonly clusterEndpoint: string;
```

- *Type:* string

---

##### `diagnosticsConfig`<sup>Required</sup> <a name="diagnosticsConfig" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.diagnosticsConfig"></a>

```typescript
public readonly diagnosticsConfig: ServiceFabricClusterDiagnosticsConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference">ServiceFabricClusterDiagnosticsConfigOutputReference</a>

---

##### `fabricSettings`<sup>Required</sup> <a name="fabricSettings" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.fabricSettings"></a>

```typescript
public readonly fabricSettings: ServiceFabricClusterFabricSettingsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList">ServiceFabricClusterFabricSettingsList</a>

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.nodeType"></a>

```typescript
public readonly nodeType: ServiceFabricClusterNodeTypeList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList">ServiceFabricClusterNodeTypeList</a>

---

##### `reverseProxyCertificate`<sup>Required</sup> <a name="reverseProxyCertificate" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.reverseProxyCertificate"></a>

```typescript
public readonly reverseProxyCertificate: ServiceFabricClusterReverseProxyCertificateOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference">ServiceFabricClusterReverseProxyCertificateOutputReference</a>

---

##### `reverseProxyCertificateCommonNames`<sup>Required</sup> <a name="reverseProxyCertificateCommonNames" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.reverseProxyCertificateCommonNames"></a>

```typescript
public readonly reverseProxyCertificateCommonNames: ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference">ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.timeouts"></a>

```typescript
public readonly timeouts: ServiceFabricClusterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference">ServiceFabricClusterTimeoutsOutputReference</a>

---

##### `upgradePolicy`<sup>Required</sup> <a name="upgradePolicy" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.upgradePolicy"></a>

```typescript
public readonly upgradePolicy: ServiceFabricClusterUpgradePolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference">ServiceFabricClusterUpgradePolicyOutputReference</a>

---

##### `addOnFeaturesInput`<sup>Optional</sup> <a name="addOnFeaturesInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.addOnFeaturesInput"></a>

```typescript
public readonly addOnFeaturesInput: string[];
```

- *Type:* string[]

---

##### `azureActiveDirectoryInput`<sup>Optional</sup> <a name="azureActiveDirectoryInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.azureActiveDirectoryInput"></a>

```typescript
public readonly azureActiveDirectoryInput: ServiceFabricClusterAzureActiveDirectory;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectory">ServiceFabricClusterAzureActiveDirectory</a>

---

##### `certificateCommonNamesInput`<sup>Optional</sup> <a name="certificateCommonNamesInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.certificateCommonNamesInput"></a>

```typescript
public readonly certificateCommonNamesInput: ServiceFabricClusterCertificateCommonNames;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNames">ServiceFabricClusterCertificateCommonNames</a>

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.certificateInput"></a>

```typescript
public readonly certificateInput: ServiceFabricClusterCertificate;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificate">ServiceFabricClusterCertificate</a>

---

##### `clientCertificateCommonNameInput`<sup>Optional</sup> <a name="clientCertificateCommonNameInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.clientCertificateCommonNameInput"></a>

```typescript
public readonly clientCertificateCommonNameInput: IResolvable | ServiceFabricClusterClientCertificateCommonName[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonName">ServiceFabricClusterClientCertificateCommonName</a>[]

---

##### `clientCertificateThumbprintInput`<sup>Optional</sup> <a name="clientCertificateThumbprintInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.clientCertificateThumbprintInput"></a>

```typescript
public readonly clientCertificateThumbprintInput: IResolvable | ServiceFabricClusterClientCertificateThumbprint[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprint">ServiceFabricClusterClientCertificateThumbprint</a>[]

---

##### `clusterCodeVersionInput`<sup>Optional</sup> <a name="clusterCodeVersionInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.clusterCodeVersionInput"></a>

```typescript
public readonly clusterCodeVersionInput: string;
```

- *Type:* string

---

##### `diagnosticsConfigInput`<sup>Optional</sup> <a name="diagnosticsConfigInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.diagnosticsConfigInput"></a>

```typescript
public readonly diagnosticsConfigInput: ServiceFabricClusterDiagnosticsConfig;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfig">ServiceFabricClusterDiagnosticsConfig</a>

---

##### `fabricSettingsInput`<sup>Optional</sup> <a name="fabricSettingsInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.fabricSettingsInput"></a>

```typescript
public readonly fabricSettingsInput: IResolvable | ServiceFabricClusterFabricSettings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettings">ServiceFabricClusterFabricSettings</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `managementEndpointInput`<sup>Optional</sup> <a name="managementEndpointInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.managementEndpointInput"></a>

```typescript
public readonly managementEndpointInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nodeTypeInput`<sup>Optional</sup> <a name="nodeTypeInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.nodeTypeInput"></a>

```typescript
public readonly nodeTypeInput: IResolvable | ServiceFabricClusterNodeType[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType">ServiceFabricClusterNodeType</a>[]

---

##### `reliabilityLevelInput`<sup>Optional</sup> <a name="reliabilityLevelInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.reliabilityLevelInput"></a>

```typescript
public readonly reliabilityLevelInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `reverseProxyCertificateCommonNamesInput`<sup>Optional</sup> <a name="reverseProxyCertificateCommonNamesInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.reverseProxyCertificateCommonNamesInput"></a>

```typescript
public readonly reverseProxyCertificateCommonNamesInput: ServiceFabricClusterReverseProxyCertificateCommonNames;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNames">ServiceFabricClusterReverseProxyCertificateCommonNames</a>

---

##### `reverseProxyCertificateInput`<sup>Optional</sup> <a name="reverseProxyCertificateInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.reverseProxyCertificateInput"></a>

```typescript
public readonly reverseProxyCertificateInput: ServiceFabricClusterReverseProxyCertificate;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificate">ServiceFabricClusterReverseProxyCertificate</a>

---

##### `serviceFabricZonalUpgradeModeInput`<sup>Optional</sup> <a name="serviceFabricZonalUpgradeModeInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.serviceFabricZonalUpgradeModeInput"></a>

```typescript
public readonly serviceFabricZonalUpgradeModeInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ServiceFabricClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeouts">ServiceFabricClusterTimeouts</a>

---

##### `upgradeModeInput`<sup>Optional</sup> <a name="upgradeModeInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.upgradeModeInput"></a>

```typescript
public readonly upgradeModeInput: string;
```

- *Type:* string

---

##### `upgradePolicyInput`<sup>Optional</sup> <a name="upgradePolicyInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.upgradePolicyInput"></a>

```typescript
public readonly upgradePolicyInput: ServiceFabricClusterUpgradePolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy">ServiceFabricClusterUpgradePolicy</a>

---

##### `vmImageInput`<sup>Optional</sup> <a name="vmImageInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.vmImageInput"></a>

```typescript
public readonly vmImageInput: string;
```

- *Type:* string

---

##### `vmssZonalUpgradeModeInput`<sup>Optional</sup> <a name="vmssZonalUpgradeModeInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.vmssZonalUpgradeModeInput"></a>

```typescript
public readonly vmssZonalUpgradeModeInput: string;
```

- *Type:* string

---

##### `addOnFeatures`<sup>Required</sup> <a name="addOnFeatures" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.addOnFeatures"></a>

```typescript
public readonly addOnFeatures: string[];
```

- *Type:* string[]

---

##### `clusterCodeVersion`<sup>Required</sup> <a name="clusterCodeVersion" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.clusterCodeVersion"></a>

```typescript
public readonly clusterCodeVersion: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `managementEndpoint`<sup>Required</sup> <a name="managementEndpoint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.managementEndpoint"></a>

```typescript
public readonly managementEndpoint: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `reliabilityLevel`<sup>Required</sup> <a name="reliabilityLevel" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.reliabilityLevel"></a>

```typescript
public readonly reliabilityLevel: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `serviceFabricZonalUpgradeMode`<sup>Required</sup> <a name="serviceFabricZonalUpgradeMode" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.serviceFabricZonalUpgradeMode"></a>

```typescript
public readonly serviceFabricZonalUpgradeMode: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `upgradeMode`<sup>Required</sup> <a name="upgradeMode" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.upgradeMode"></a>

```typescript
public readonly upgradeMode: string;
```

- *Type:* string

---

##### `vmImage`<sup>Required</sup> <a name="vmImage" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.vmImage"></a>

```typescript
public readonly vmImage: string;
```

- *Type:* string

---

##### `vmssZonalUpgradeMode`<sup>Required</sup> <a name="vmssZonalUpgradeMode" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.vmssZonalUpgradeMode"></a>

```typescript
public readonly vmssZonalUpgradeMode: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceFabricClusterAzureActiveDirectory <a name="ServiceFabricClusterAzureActiveDirectory" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectory.Initializer"></a>

```typescript
import { serviceFabricCluster } from '@cdktf/provider-azurerm'

const serviceFabricClusterAzureActiveDirectory: serviceFabricCluster.ServiceFabricClusterAzureActiveDirectory = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectory.property.clientApplicationId">clientApplicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#client_application_id ServiceFabricCluster#client_application_id}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectory.property.clusterApplicationId">clusterApplicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#cluster_application_id ServiceFabricCluster#cluster_application_id}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectory.property.tenantId">tenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#tenant_id ServiceFabricCluster#tenant_id}. |

---

##### `clientApplicationId`<sup>Required</sup> <a name="clientApplicationId" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectory.property.clientApplicationId"></a>

```typescript
public readonly clientApplicationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#client_application_id ServiceFabricCluster#client_application_id}.

---

##### `clusterApplicationId`<sup>Required</sup> <a name="clusterApplicationId" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectory.property.clusterApplicationId"></a>

```typescript
public readonly clusterApplicationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#cluster_application_id ServiceFabricCluster#cluster_application_id}.

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectory.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#tenant_id ServiceFabricCluster#tenant_id}.

---

### ServiceFabricClusterCertificate <a name="ServiceFabricClusterCertificate" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificate.Initializer"></a>

```typescript
import { serviceFabricCluster } from '@cdktf/provider-azurerm'

const serviceFabricClusterCertificate: serviceFabricCluster.ServiceFabricClusterCertificate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificate.property.thumbprint">thumbprint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#thumbprint ServiceFabricCluster#thumbprint}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificate.property.x509StoreName">x509StoreName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#x509_store_name ServiceFabricCluster#x509_store_name}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificate.property.thumbprintSecondary">thumbprintSecondary</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#thumbprint_secondary ServiceFabricCluster#thumbprint_secondary}. |

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificate.property.thumbprint"></a>

```typescript
public readonly thumbprint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#thumbprint ServiceFabricCluster#thumbprint}.

---

##### `x509StoreName`<sup>Required</sup> <a name="x509StoreName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificate.property.x509StoreName"></a>

```typescript
public readonly x509StoreName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#x509_store_name ServiceFabricCluster#x509_store_name}.

---

##### `thumbprintSecondary`<sup>Optional</sup> <a name="thumbprintSecondary" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificate.property.thumbprintSecondary"></a>

```typescript
public readonly thumbprintSecondary: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#thumbprint_secondary ServiceFabricCluster#thumbprint_secondary}.

---

### ServiceFabricClusterCertificateCommonNames <a name="ServiceFabricClusterCertificateCommonNames" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNames.Initializer"></a>

```typescript
import { serviceFabricCluster } from '@cdktf/provider-azurerm'

const serviceFabricClusterCertificateCommonNames: serviceFabricCluster.ServiceFabricClusterCertificateCommonNames = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNames.property.commonNames">commonNames</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNames">ServiceFabricClusterCertificateCommonNamesCommonNames</a>[]</code> | common_names block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNames.property.x509StoreName">x509StoreName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#x509_store_name ServiceFabricCluster#x509_store_name}. |

---

##### `commonNames`<sup>Required</sup> <a name="commonNames" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNames.property.commonNames"></a>

```typescript
public readonly commonNames: IResolvable | ServiceFabricClusterCertificateCommonNamesCommonNames[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNames">ServiceFabricClusterCertificateCommonNamesCommonNames</a>[]

common_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#common_names ServiceFabricCluster#common_names}

---

##### `x509StoreName`<sup>Required</sup> <a name="x509StoreName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNames.property.x509StoreName"></a>

```typescript
public readonly x509StoreName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#x509_store_name ServiceFabricCluster#x509_store_name}.

---

### ServiceFabricClusterCertificateCommonNamesCommonNames <a name="ServiceFabricClusterCertificateCommonNamesCommonNames" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNames.Initializer"></a>

```typescript
import { serviceFabricCluster } from '@cdktf/provider-azurerm'

const serviceFabricClusterCertificateCommonNamesCommonNames: serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNames = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNames.property.certificateCommonName">certificateCommonName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#certificate_common_name ServiceFabricCluster#certificate_common_name}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNames.property.certificateIssuerThumbprint">certificateIssuerThumbprint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#certificate_issuer_thumbprint ServiceFabricCluster#certificate_issuer_thumbprint}. |

---

##### `certificateCommonName`<sup>Required</sup> <a name="certificateCommonName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNames.property.certificateCommonName"></a>

```typescript
public readonly certificateCommonName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#certificate_common_name ServiceFabricCluster#certificate_common_name}.

---

##### `certificateIssuerThumbprint`<sup>Optional</sup> <a name="certificateIssuerThumbprint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNames.property.certificateIssuerThumbprint"></a>

```typescript
public readonly certificateIssuerThumbprint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#certificate_issuer_thumbprint ServiceFabricCluster#certificate_issuer_thumbprint}.

---

### ServiceFabricClusterClientCertificateCommonName <a name="ServiceFabricClusterClientCertificateCommonName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonName"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonName.Initializer"></a>

```typescript
import { serviceFabricCluster } from '@cdktf/provider-azurerm'

const serviceFabricClusterClientCertificateCommonName: serviceFabricCluster.ServiceFabricClusterClientCertificateCommonName = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonName.property.commonName">commonName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#common_name ServiceFabricCluster#common_name}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonName.property.isAdmin">isAdmin</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#is_admin ServiceFabricCluster#is_admin}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonName.property.issuerThumbprint">issuerThumbprint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#issuer_thumbprint ServiceFabricCluster#issuer_thumbprint}. |

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonName.property.commonName"></a>

```typescript
public readonly commonName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#common_name ServiceFabricCluster#common_name}.

---

##### `isAdmin`<sup>Required</sup> <a name="isAdmin" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonName.property.isAdmin"></a>

```typescript
public readonly isAdmin: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#is_admin ServiceFabricCluster#is_admin}.

---

##### `issuerThumbprint`<sup>Optional</sup> <a name="issuerThumbprint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonName.property.issuerThumbprint"></a>

```typescript
public readonly issuerThumbprint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#issuer_thumbprint ServiceFabricCluster#issuer_thumbprint}.

---

### ServiceFabricClusterClientCertificateThumbprint <a name="ServiceFabricClusterClientCertificateThumbprint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprint.Initializer"></a>

```typescript
import { serviceFabricCluster } from '@cdktf/provider-azurerm'

const serviceFabricClusterClientCertificateThumbprint: serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprint.property.isAdmin">isAdmin</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#is_admin ServiceFabricCluster#is_admin}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprint.property.thumbprint">thumbprint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#thumbprint ServiceFabricCluster#thumbprint}. |

---

##### `isAdmin`<sup>Required</sup> <a name="isAdmin" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprint.property.isAdmin"></a>

```typescript
public readonly isAdmin: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#is_admin ServiceFabricCluster#is_admin}.

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprint.property.thumbprint"></a>

```typescript
public readonly thumbprint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#thumbprint ServiceFabricCluster#thumbprint}.

---

### ServiceFabricClusterConfig <a name="ServiceFabricClusterConfig" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.Initializer"></a>

```typescript
import { serviceFabricCluster } from '@cdktf/provider-azurerm'

const serviceFabricClusterConfig: serviceFabricCluster.ServiceFabricClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#location ServiceFabricCluster#location}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.managementEndpoint">managementEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#management_endpoint ServiceFabricCluster#management_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#name ServiceFabricCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.nodeType">nodeType</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType">ServiceFabricClusterNodeType</a>[]</code> | node_type block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.reliabilityLevel">reliabilityLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#reliability_level ServiceFabricCluster#reliability_level}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#resource_group_name ServiceFabricCluster#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.upgradeMode">upgradeMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#upgrade_mode ServiceFabricCluster#upgrade_mode}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.vmImage">vmImage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#vm_image ServiceFabricCluster#vm_image}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.addOnFeatures">addOnFeatures</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#add_on_features ServiceFabricCluster#add_on_features}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.azureActiveDirectory">azureActiveDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectory">ServiceFabricClusterAzureActiveDirectory</a></code> | azure_active_directory block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.certificate">certificate</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificate">ServiceFabricClusterCertificate</a></code> | certificate block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.certificateCommonNames">certificateCommonNames</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNames">ServiceFabricClusterCertificateCommonNames</a></code> | certificate_common_names block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.clientCertificateCommonName">clientCertificateCommonName</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonName">ServiceFabricClusterClientCertificateCommonName</a>[]</code> | client_certificate_common_name block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.clientCertificateThumbprint">clientCertificateThumbprint</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprint">ServiceFabricClusterClientCertificateThumbprint</a>[]</code> | client_certificate_thumbprint block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.clusterCodeVersion">clusterCodeVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#cluster_code_version ServiceFabricCluster#cluster_code_version}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.diagnosticsConfig">diagnosticsConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfig">ServiceFabricClusterDiagnosticsConfig</a></code> | diagnostics_config block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.fabricSettings">fabricSettings</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettings">ServiceFabricClusterFabricSettings</a>[]</code> | fabric_settings block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#id ServiceFabricCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.reverseProxyCertificate">reverseProxyCertificate</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificate">ServiceFabricClusterReverseProxyCertificate</a></code> | reverse_proxy_certificate block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.reverseProxyCertificateCommonNames">reverseProxyCertificateCommonNames</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNames">ServiceFabricClusterReverseProxyCertificateCommonNames</a></code> | reverse_proxy_certificate_common_names block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.serviceFabricZonalUpgradeMode">serviceFabricZonalUpgradeMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#service_fabric_zonal_upgrade_mode ServiceFabricCluster#service_fabric_zonal_upgrade_mode}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#tags ServiceFabricCluster#tags}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeouts">ServiceFabricClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.upgradePolicy">upgradePolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy">ServiceFabricClusterUpgradePolicy</a></code> | upgrade_policy block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.vmssZonalUpgradeMode">vmssZonalUpgradeMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#vmss_zonal_upgrade_mode ServiceFabricCluster#vmss_zonal_upgrade_mode}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#location ServiceFabricCluster#location}.

---

##### `managementEndpoint`<sup>Required</sup> <a name="managementEndpoint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.managementEndpoint"></a>

```typescript
public readonly managementEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#management_endpoint ServiceFabricCluster#management_endpoint}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#name ServiceFabricCluster#name}.

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.nodeType"></a>

```typescript
public readonly nodeType: IResolvable | ServiceFabricClusterNodeType[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType">ServiceFabricClusterNodeType</a>[]

node_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#node_type ServiceFabricCluster#node_type}

---

##### `reliabilityLevel`<sup>Required</sup> <a name="reliabilityLevel" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.reliabilityLevel"></a>

```typescript
public readonly reliabilityLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#reliability_level ServiceFabricCluster#reliability_level}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#resource_group_name ServiceFabricCluster#resource_group_name}.

---

##### `upgradeMode`<sup>Required</sup> <a name="upgradeMode" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.upgradeMode"></a>

```typescript
public readonly upgradeMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#upgrade_mode ServiceFabricCluster#upgrade_mode}.

---

##### `vmImage`<sup>Required</sup> <a name="vmImage" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.vmImage"></a>

```typescript
public readonly vmImage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#vm_image ServiceFabricCluster#vm_image}.

---

##### `addOnFeatures`<sup>Optional</sup> <a name="addOnFeatures" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.addOnFeatures"></a>

```typescript
public readonly addOnFeatures: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#add_on_features ServiceFabricCluster#add_on_features}.

---

##### `azureActiveDirectory`<sup>Optional</sup> <a name="azureActiveDirectory" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.azureActiveDirectory"></a>

```typescript
public readonly azureActiveDirectory: ServiceFabricClusterAzureActiveDirectory;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectory">ServiceFabricClusterAzureActiveDirectory</a>

azure_active_directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#azure_active_directory ServiceFabricCluster#azure_active_directory}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.certificate"></a>

```typescript
public readonly certificate: ServiceFabricClusterCertificate;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificate">ServiceFabricClusterCertificate</a>

certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#certificate ServiceFabricCluster#certificate}

---

##### `certificateCommonNames`<sup>Optional</sup> <a name="certificateCommonNames" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.certificateCommonNames"></a>

```typescript
public readonly certificateCommonNames: ServiceFabricClusterCertificateCommonNames;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNames">ServiceFabricClusterCertificateCommonNames</a>

certificate_common_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#certificate_common_names ServiceFabricCluster#certificate_common_names}

---

##### `clientCertificateCommonName`<sup>Optional</sup> <a name="clientCertificateCommonName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.clientCertificateCommonName"></a>

```typescript
public readonly clientCertificateCommonName: IResolvable | ServiceFabricClusterClientCertificateCommonName[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonName">ServiceFabricClusterClientCertificateCommonName</a>[]

client_certificate_common_name block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#client_certificate_common_name ServiceFabricCluster#client_certificate_common_name}

---

##### `clientCertificateThumbprint`<sup>Optional</sup> <a name="clientCertificateThumbprint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.clientCertificateThumbprint"></a>

```typescript
public readonly clientCertificateThumbprint: IResolvable | ServiceFabricClusterClientCertificateThumbprint[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprint">ServiceFabricClusterClientCertificateThumbprint</a>[]

client_certificate_thumbprint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#client_certificate_thumbprint ServiceFabricCluster#client_certificate_thumbprint}

---

##### `clusterCodeVersion`<sup>Optional</sup> <a name="clusterCodeVersion" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.clusterCodeVersion"></a>

```typescript
public readonly clusterCodeVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#cluster_code_version ServiceFabricCluster#cluster_code_version}.

---

##### `diagnosticsConfig`<sup>Optional</sup> <a name="diagnosticsConfig" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.diagnosticsConfig"></a>

```typescript
public readonly diagnosticsConfig: ServiceFabricClusterDiagnosticsConfig;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfig">ServiceFabricClusterDiagnosticsConfig</a>

diagnostics_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#diagnostics_config ServiceFabricCluster#diagnostics_config}

---

##### `fabricSettings`<sup>Optional</sup> <a name="fabricSettings" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.fabricSettings"></a>

```typescript
public readonly fabricSettings: IResolvable | ServiceFabricClusterFabricSettings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettings">ServiceFabricClusterFabricSettings</a>[]

fabric_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#fabric_settings ServiceFabricCluster#fabric_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#id ServiceFabricCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `reverseProxyCertificate`<sup>Optional</sup> <a name="reverseProxyCertificate" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.reverseProxyCertificate"></a>

```typescript
public readonly reverseProxyCertificate: ServiceFabricClusterReverseProxyCertificate;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificate">ServiceFabricClusterReverseProxyCertificate</a>

reverse_proxy_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#reverse_proxy_certificate ServiceFabricCluster#reverse_proxy_certificate}

---

##### `reverseProxyCertificateCommonNames`<sup>Optional</sup> <a name="reverseProxyCertificateCommonNames" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.reverseProxyCertificateCommonNames"></a>

```typescript
public readonly reverseProxyCertificateCommonNames: ServiceFabricClusterReverseProxyCertificateCommonNames;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNames">ServiceFabricClusterReverseProxyCertificateCommonNames</a>

reverse_proxy_certificate_common_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#reverse_proxy_certificate_common_names ServiceFabricCluster#reverse_proxy_certificate_common_names}

---

##### `serviceFabricZonalUpgradeMode`<sup>Optional</sup> <a name="serviceFabricZonalUpgradeMode" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.serviceFabricZonalUpgradeMode"></a>

```typescript
public readonly serviceFabricZonalUpgradeMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#service_fabric_zonal_upgrade_mode ServiceFabricCluster#service_fabric_zonal_upgrade_mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#tags ServiceFabricCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ServiceFabricClusterTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeouts">ServiceFabricClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#timeouts ServiceFabricCluster#timeouts}

---

##### `upgradePolicy`<sup>Optional</sup> <a name="upgradePolicy" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.upgradePolicy"></a>

```typescript
public readonly upgradePolicy: ServiceFabricClusterUpgradePolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy">ServiceFabricClusterUpgradePolicy</a>

upgrade_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#upgrade_policy ServiceFabricCluster#upgrade_policy}

---

##### `vmssZonalUpgradeMode`<sup>Optional</sup> <a name="vmssZonalUpgradeMode" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.vmssZonalUpgradeMode"></a>

```typescript
public readonly vmssZonalUpgradeMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#vmss_zonal_upgrade_mode ServiceFabricCluster#vmss_zonal_upgrade_mode}.

---

### ServiceFabricClusterDiagnosticsConfig <a name="ServiceFabricClusterDiagnosticsConfig" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfig.Initializer"></a>

```typescript
import { serviceFabricCluster } from '@cdktf/provider-azurerm'

const serviceFabricClusterDiagnosticsConfig: serviceFabricCluster.ServiceFabricClusterDiagnosticsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfig.property.blobEndpoint">blobEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#blob_endpoint ServiceFabricCluster#blob_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfig.property.protectedAccountKeyName">protectedAccountKeyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#protected_account_key_name ServiceFabricCluster#protected_account_key_name}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfig.property.queueEndpoint">queueEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#queue_endpoint ServiceFabricCluster#queue_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfig.property.storageAccountName">storageAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#storage_account_name ServiceFabricCluster#storage_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfig.property.tableEndpoint">tableEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#table_endpoint ServiceFabricCluster#table_endpoint}. |

---

##### `blobEndpoint`<sup>Required</sup> <a name="blobEndpoint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfig.property.blobEndpoint"></a>

```typescript
public readonly blobEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#blob_endpoint ServiceFabricCluster#blob_endpoint}.

---

##### `protectedAccountKeyName`<sup>Required</sup> <a name="protectedAccountKeyName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfig.property.protectedAccountKeyName"></a>

```typescript
public readonly protectedAccountKeyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#protected_account_key_name ServiceFabricCluster#protected_account_key_name}.

---

##### `queueEndpoint`<sup>Required</sup> <a name="queueEndpoint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfig.property.queueEndpoint"></a>

```typescript
public readonly queueEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#queue_endpoint ServiceFabricCluster#queue_endpoint}.

---

##### `storageAccountName`<sup>Required</sup> <a name="storageAccountName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfig.property.storageAccountName"></a>

```typescript
public readonly storageAccountName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#storage_account_name ServiceFabricCluster#storage_account_name}.

---

##### `tableEndpoint`<sup>Required</sup> <a name="tableEndpoint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfig.property.tableEndpoint"></a>

```typescript
public readonly tableEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#table_endpoint ServiceFabricCluster#table_endpoint}.

---

### ServiceFabricClusterFabricSettings <a name="ServiceFabricClusterFabricSettings" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettings.Initializer"></a>

```typescript
import { serviceFabricCluster } from '@cdktf/provider-azurerm'

const serviceFabricClusterFabricSettings: serviceFabricCluster.ServiceFabricClusterFabricSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettings.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#name ServiceFabricCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettings.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#parameters ServiceFabricCluster#parameters}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettings.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#name ServiceFabricCluster#name}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettings.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#parameters ServiceFabricCluster#parameters}.

---

### ServiceFabricClusterNodeType <a name="ServiceFabricClusterNodeType" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.Initializer"></a>

```typescript
import { serviceFabricCluster } from '@cdktf/provider-azurerm'

const serviceFabricClusterNodeType: serviceFabricCluster.ServiceFabricClusterNodeType = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.clientEndpointPort">clientEndpointPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#client_endpoint_port ServiceFabricCluster#client_endpoint_port}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.httpEndpointPort">httpEndpointPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#http_endpoint_port ServiceFabricCluster#http_endpoint_port}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.instanceCount">instanceCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#instance_count ServiceFabricCluster#instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.isPrimary">isPrimary</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#is_primary ServiceFabricCluster#is_primary}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#name ServiceFabricCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.applicationPorts">applicationPorts</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPorts">ServiceFabricClusterNodeTypeApplicationPorts</a></code> | application_ports block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.capacities">capacities</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#capacities ServiceFabricCluster#capacities}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.durabilityLevel">durabilityLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#durability_level ServiceFabricCluster#durability_level}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.ephemeralPorts">ephemeralPorts</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPorts">ServiceFabricClusterNodeTypeEphemeralPorts</a></code> | ephemeral_ports block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.isStateless">isStateless</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#is_stateless ServiceFabricCluster#is_stateless}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.multipleAvailabilityZones">multipleAvailabilityZones</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#multiple_availability_zones ServiceFabricCluster#multiple_availability_zones}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.placementProperties">placementProperties</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#placement_properties ServiceFabricCluster#placement_properties}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.reverseProxyEndpointPort">reverseProxyEndpointPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#reverse_proxy_endpoint_port ServiceFabricCluster#reverse_proxy_endpoint_port}. |

---

##### `clientEndpointPort`<sup>Required</sup> <a name="clientEndpointPort" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.clientEndpointPort"></a>

```typescript
public readonly clientEndpointPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#client_endpoint_port ServiceFabricCluster#client_endpoint_port}.

---

##### `httpEndpointPort`<sup>Required</sup> <a name="httpEndpointPort" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.httpEndpointPort"></a>

```typescript
public readonly httpEndpointPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#http_endpoint_port ServiceFabricCluster#http_endpoint_port}.

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.instanceCount"></a>

```typescript
public readonly instanceCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#instance_count ServiceFabricCluster#instance_count}.

---

##### `isPrimary`<sup>Required</sup> <a name="isPrimary" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.isPrimary"></a>

```typescript
public readonly isPrimary: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#is_primary ServiceFabricCluster#is_primary}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#name ServiceFabricCluster#name}.

---

##### `applicationPorts`<sup>Optional</sup> <a name="applicationPorts" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.applicationPorts"></a>

```typescript
public readonly applicationPorts: ServiceFabricClusterNodeTypeApplicationPorts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPorts">ServiceFabricClusterNodeTypeApplicationPorts</a>

application_ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#application_ports ServiceFabricCluster#application_ports}

---

##### `capacities`<sup>Optional</sup> <a name="capacities" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.capacities"></a>

```typescript
public readonly capacities: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#capacities ServiceFabricCluster#capacities}.

---

##### `durabilityLevel`<sup>Optional</sup> <a name="durabilityLevel" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.durabilityLevel"></a>

```typescript
public readonly durabilityLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#durability_level ServiceFabricCluster#durability_level}.

---

##### `ephemeralPorts`<sup>Optional</sup> <a name="ephemeralPorts" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.ephemeralPorts"></a>

```typescript
public readonly ephemeralPorts: ServiceFabricClusterNodeTypeEphemeralPorts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPorts">ServiceFabricClusterNodeTypeEphemeralPorts</a>

ephemeral_ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#ephemeral_ports ServiceFabricCluster#ephemeral_ports}

---

##### `isStateless`<sup>Optional</sup> <a name="isStateless" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.isStateless"></a>

```typescript
public readonly isStateless: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#is_stateless ServiceFabricCluster#is_stateless}.

---

##### `multipleAvailabilityZones`<sup>Optional</sup> <a name="multipleAvailabilityZones" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.multipleAvailabilityZones"></a>

```typescript
public readonly multipleAvailabilityZones: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#multiple_availability_zones ServiceFabricCluster#multiple_availability_zones}.

---

##### `placementProperties`<sup>Optional</sup> <a name="placementProperties" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.placementProperties"></a>

```typescript
public readonly placementProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#placement_properties ServiceFabricCluster#placement_properties}.

---

##### `reverseProxyEndpointPort`<sup>Optional</sup> <a name="reverseProxyEndpointPort" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.reverseProxyEndpointPort"></a>

```typescript
public readonly reverseProxyEndpointPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#reverse_proxy_endpoint_port ServiceFabricCluster#reverse_proxy_endpoint_port}.

---

### ServiceFabricClusterNodeTypeApplicationPorts <a name="ServiceFabricClusterNodeTypeApplicationPorts" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPorts.Initializer"></a>

```typescript
import { serviceFabricCluster } from '@cdktf/provider-azurerm'

const serviceFabricClusterNodeTypeApplicationPorts: serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPorts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPorts.property.endPort">endPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#end_port ServiceFabricCluster#end_port}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPorts.property.startPort">startPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#start_port ServiceFabricCluster#start_port}. |

---

##### `endPort`<sup>Required</sup> <a name="endPort" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPorts.property.endPort"></a>

```typescript
public readonly endPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#end_port ServiceFabricCluster#end_port}.

---

##### `startPort`<sup>Required</sup> <a name="startPort" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPorts.property.startPort"></a>

```typescript
public readonly startPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#start_port ServiceFabricCluster#start_port}.

---

### ServiceFabricClusterNodeTypeEphemeralPorts <a name="ServiceFabricClusterNodeTypeEphemeralPorts" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPorts.Initializer"></a>

```typescript
import { serviceFabricCluster } from '@cdktf/provider-azurerm'

const serviceFabricClusterNodeTypeEphemeralPorts: serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPorts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPorts.property.endPort">endPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#end_port ServiceFabricCluster#end_port}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPorts.property.startPort">startPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#start_port ServiceFabricCluster#start_port}. |

---

##### `endPort`<sup>Required</sup> <a name="endPort" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPorts.property.endPort"></a>

```typescript
public readonly endPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#end_port ServiceFabricCluster#end_port}.

---

##### `startPort`<sup>Required</sup> <a name="startPort" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPorts.property.startPort"></a>

```typescript
public readonly startPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#start_port ServiceFabricCluster#start_port}.

---

### ServiceFabricClusterReverseProxyCertificate <a name="ServiceFabricClusterReverseProxyCertificate" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificate.Initializer"></a>

```typescript
import { serviceFabricCluster } from '@cdktf/provider-azurerm'

const serviceFabricClusterReverseProxyCertificate: serviceFabricCluster.ServiceFabricClusterReverseProxyCertificate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificate.property.thumbprint">thumbprint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#thumbprint ServiceFabricCluster#thumbprint}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificate.property.x509StoreName">x509StoreName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#x509_store_name ServiceFabricCluster#x509_store_name}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificate.property.thumbprintSecondary">thumbprintSecondary</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#thumbprint_secondary ServiceFabricCluster#thumbprint_secondary}. |

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificate.property.thumbprint"></a>

```typescript
public readonly thumbprint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#thumbprint ServiceFabricCluster#thumbprint}.

---

##### `x509StoreName`<sup>Required</sup> <a name="x509StoreName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificate.property.x509StoreName"></a>

```typescript
public readonly x509StoreName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#x509_store_name ServiceFabricCluster#x509_store_name}.

---

##### `thumbprintSecondary`<sup>Optional</sup> <a name="thumbprintSecondary" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificate.property.thumbprintSecondary"></a>

```typescript
public readonly thumbprintSecondary: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#thumbprint_secondary ServiceFabricCluster#thumbprint_secondary}.

---

### ServiceFabricClusterReverseProxyCertificateCommonNames <a name="ServiceFabricClusterReverseProxyCertificateCommonNames" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNames.Initializer"></a>

```typescript
import { serviceFabricCluster } from '@cdktf/provider-azurerm'

const serviceFabricClusterReverseProxyCertificateCommonNames: serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNames = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNames.property.commonNames">commonNames</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames">ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames</a>[]</code> | common_names block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNames.property.x509StoreName">x509StoreName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#x509_store_name ServiceFabricCluster#x509_store_name}. |

---

##### `commonNames`<sup>Required</sup> <a name="commonNames" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNames.property.commonNames"></a>

```typescript
public readonly commonNames: IResolvable | ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames">ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames</a>[]

common_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#common_names ServiceFabricCluster#common_names}

---

##### `x509StoreName`<sup>Required</sup> <a name="x509StoreName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNames.property.x509StoreName"></a>

```typescript
public readonly x509StoreName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#x509_store_name ServiceFabricCluster#x509_store_name}.

---

### ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames <a name="ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames.Initializer"></a>

```typescript
import { serviceFabricCluster } from '@cdktf/provider-azurerm'

const serviceFabricClusterReverseProxyCertificateCommonNamesCommonNames: serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames.property.certificateCommonName">certificateCommonName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#certificate_common_name ServiceFabricCluster#certificate_common_name}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames.property.certificateIssuerThumbprint">certificateIssuerThumbprint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#certificate_issuer_thumbprint ServiceFabricCluster#certificate_issuer_thumbprint}. |

---

##### `certificateCommonName`<sup>Required</sup> <a name="certificateCommonName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames.property.certificateCommonName"></a>

```typescript
public readonly certificateCommonName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#certificate_common_name ServiceFabricCluster#certificate_common_name}.

---

##### `certificateIssuerThumbprint`<sup>Optional</sup> <a name="certificateIssuerThumbprint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames.property.certificateIssuerThumbprint"></a>

```typescript
public readonly certificateIssuerThumbprint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#certificate_issuer_thumbprint ServiceFabricCluster#certificate_issuer_thumbprint}.

---

### ServiceFabricClusterTimeouts <a name="ServiceFabricClusterTimeouts" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeouts.Initializer"></a>

```typescript
import { serviceFabricCluster } from '@cdktf/provider-azurerm'

const serviceFabricClusterTimeouts: serviceFabricCluster.ServiceFabricClusterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#create ServiceFabricCluster#create}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#delete ServiceFabricCluster#delete}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#read ServiceFabricCluster#read}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#update ServiceFabricCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#create ServiceFabricCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#delete ServiceFabricCluster#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#read ServiceFabricCluster#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#update ServiceFabricCluster#update}.

---

### ServiceFabricClusterUpgradePolicy <a name="ServiceFabricClusterUpgradePolicy" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy.Initializer"></a>

```typescript
import { serviceFabricCluster } from '@cdktf/provider-azurerm'

const serviceFabricClusterUpgradePolicy: serviceFabricCluster.ServiceFabricClusterUpgradePolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy.property.deltaHealthPolicy">deltaHealthPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicy">ServiceFabricClusterUpgradePolicyDeltaHealthPolicy</a></code> | delta_health_policy block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy.property.forceRestartEnabled">forceRestartEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#force_restart_enabled ServiceFabricCluster#force_restart_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy.property.healthCheckRetryTimeout">healthCheckRetryTimeout</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#health_check_retry_timeout ServiceFabricCluster#health_check_retry_timeout}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy.property.healthCheckStableDuration">healthCheckStableDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#health_check_stable_duration ServiceFabricCluster#health_check_stable_duration}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy.property.healthCheckWaitDuration">healthCheckWaitDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#health_check_wait_duration ServiceFabricCluster#health_check_wait_duration}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy.property.healthPolicy">healthPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicy">ServiceFabricClusterUpgradePolicyHealthPolicy</a></code> | health_policy block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy.property.upgradeDomainTimeout">upgradeDomainTimeout</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#upgrade_domain_timeout ServiceFabricCluster#upgrade_domain_timeout}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy.property.upgradeReplicaSetCheckTimeout">upgradeReplicaSetCheckTimeout</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#upgrade_replica_set_check_timeout ServiceFabricCluster#upgrade_replica_set_check_timeout}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy.property.upgradeTimeout">upgradeTimeout</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#upgrade_timeout ServiceFabricCluster#upgrade_timeout}. |

---

##### `deltaHealthPolicy`<sup>Optional</sup> <a name="deltaHealthPolicy" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy.property.deltaHealthPolicy"></a>

```typescript
public readonly deltaHealthPolicy: ServiceFabricClusterUpgradePolicyDeltaHealthPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicy">ServiceFabricClusterUpgradePolicyDeltaHealthPolicy</a>

delta_health_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#delta_health_policy ServiceFabricCluster#delta_health_policy}

---

##### `forceRestartEnabled`<sup>Optional</sup> <a name="forceRestartEnabled" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy.property.forceRestartEnabled"></a>

```typescript
public readonly forceRestartEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#force_restart_enabled ServiceFabricCluster#force_restart_enabled}.

---

##### `healthCheckRetryTimeout`<sup>Optional</sup> <a name="healthCheckRetryTimeout" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy.property.healthCheckRetryTimeout"></a>

```typescript
public readonly healthCheckRetryTimeout: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#health_check_retry_timeout ServiceFabricCluster#health_check_retry_timeout}.

---

##### `healthCheckStableDuration`<sup>Optional</sup> <a name="healthCheckStableDuration" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy.property.healthCheckStableDuration"></a>

```typescript
public readonly healthCheckStableDuration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#health_check_stable_duration ServiceFabricCluster#health_check_stable_duration}.

---

##### `healthCheckWaitDuration`<sup>Optional</sup> <a name="healthCheckWaitDuration" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy.property.healthCheckWaitDuration"></a>

```typescript
public readonly healthCheckWaitDuration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#health_check_wait_duration ServiceFabricCluster#health_check_wait_duration}.

---

##### `healthPolicy`<sup>Optional</sup> <a name="healthPolicy" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy.property.healthPolicy"></a>

```typescript
public readonly healthPolicy: ServiceFabricClusterUpgradePolicyHealthPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicy">ServiceFabricClusterUpgradePolicyHealthPolicy</a>

health_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#health_policy ServiceFabricCluster#health_policy}

---

##### `upgradeDomainTimeout`<sup>Optional</sup> <a name="upgradeDomainTimeout" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy.property.upgradeDomainTimeout"></a>

```typescript
public readonly upgradeDomainTimeout: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#upgrade_domain_timeout ServiceFabricCluster#upgrade_domain_timeout}.

---

##### `upgradeReplicaSetCheckTimeout`<sup>Optional</sup> <a name="upgradeReplicaSetCheckTimeout" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy.property.upgradeReplicaSetCheckTimeout"></a>

```typescript
public readonly upgradeReplicaSetCheckTimeout: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#upgrade_replica_set_check_timeout ServiceFabricCluster#upgrade_replica_set_check_timeout}.

---

##### `upgradeTimeout`<sup>Optional</sup> <a name="upgradeTimeout" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy.property.upgradeTimeout"></a>

```typescript
public readonly upgradeTimeout: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#upgrade_timeout ServiceFabricCluster#upgrade_timeout}.

---

### ServiceFabricClusterUpgradePolicyDeltaHealthPolicy <a name="ServiceFabricClusterUpgradePolicyDeltaHealthPolicy" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicy.Initializer"></a>

```typescript
import { serviceFabricCluster } from '@cdktf/provider-azurerm'

const serviceFabricClusterUpgradePolicyDeltaHealthPolicy: serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicy.property.maxDeltaUnhealthyApplicationsPercent">maxDeltaUnhealthyApplicationsPercent</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#max_delta_unhealthy_applications_percent ServiceFabricCluster#max_delta_unhealthy_applications_percent}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicy.property.maxDeltaUnhealthyNodesPercent">maxDeltaUnhealthyNodesPercent</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#max_delta_unhealthy_nodes_percent ServiceFabricCluster#max_delta_unhealthy_nodes_percent}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicy.property.maxUpgradeDomainDeltaUnhealthyNodesPercent">maxUpgradeDomainDeltaUnhealthyNodesPercent</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#max_upgrade_domain_delta_unhealthy_nodes_percent ServiceFabricCluster#max_upgrade_domain_delta_unhealthy_nodes_percent}. |

---

##### `maxDeltaUnhealthyApplicationsPercent`<sup>Optional</sup> <a name="maxDeltaUnhealthyApplicationsPercent" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicy.property.maxDeltaUnhealthyApplicationsPercent"></a>

```typescript
public readonly maxDeltaUnhealthyApplicationsPercent: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#max_delta_unhealthy_applications_percent ServiceFabricCluster#max_delta_unhealthy_applications_percent}.

---

##### `maxDeltaUnhealthyNodesPercent`<sup>Optional</sup> <a name="maxDeltaUnhealthyNodesPercent" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicy.property.maxDeltaUnhealthyNodesPercent"></a>

```typescript
public readonly maxDeltaUnhealthyNodesPercent: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#max_delta_unhealthy_nodes_percent ServiceFabricCluster#max_delta_unhealthy_nodes_percent}.

---

##### `maxUpgradeDomainDeltaUnhealthyNodesPercent`<sup>Optional</sup> <a name="maxUpgradeDomainDeltaUnhealthyNodesPercent" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicy.property.maxUpgradeDomainDeltaUnhealthyNodesPercent"></a>

```typescript
public readonly maxUpgradeDomainDeltaUnhealthyNodesPercent: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#max_upgrade_domain_delta_unhealthy_nodes_percent ServiceFabricCluster#max_upgrade_domain_delta_unhealthy_nodes_percent}.

---

### ServiceFabricClusterUpgradePolicyHealthPolicy <a name="ServiceFabricClusterUpgradePolicyHealthPolicy" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicy.Initializer"></a>

```typescript
import { serviceFabricCluster } from '@cdktf/provider-azurerm'

const serviceFabricClusterUpgradePolicyHealthPolicy: serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicy.property.maxUnhealthyApplicationsPercent">maxUnhealthyApplicationsPercent</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#max_unhealthy_applications_percent ServiceFabricCluster#max_unhealthy_applications_percent}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicy.property.maxUnhealthyNodesPercent">maxUnhealthyNodesPercent</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#max_unhealthy_nodes_percent ServiceFabricCluster#max_unhealthy_nodes_percent}. |

---

##### `maxUnhealthyApplicationsPercent`<sup>Optional</sup> <a name="maxUnhealthyApplicationsPercent" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicy.property.maxUnhealthyApplicationsPercent"></a>

```typescript
public readonly maxUnhealthyApplicationsPercent: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#max_unhealthy_applications_percent ServiceFabricCluster#max_unhealthy_applications_percent}.

---

##### `maxUnhealthyNodesPercent`<sup>Optional</sup> <a name="maxUnhealthyNodesPercent" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicy.property.maxUnhealthyNodesPercent"></a>

```typescript
public readonly maxUnhealthyNodesPercent: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/service_fabric_cluster#max_unhealthy_nodes_percent ServiceFabricCluster#max_unhealthy_nodes_percent}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceFabricClusterAzureActiveDirectoryOutputReference <a name="ServiceFabricClusterAzureActiveDirectoryOutputReference" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.Initializer"></a>

```typescript
import { serviceFabricCluster } from '@cdktf/provider-azurerm'

new serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.property.clientApplicationIdInput">clientApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.property.clusterApplicationIdInput">clusterApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.property.clientApplicationId">clientApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.property.clusterApplicationId">clusterApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectory">ServiceFabricClusterAzureActiveDirectory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientApplicationIdInput`<sup>Optional</sup> <a name="clientApplicationIdInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.property.clientApplicationIdInput"></a>

```typescript
public readonly clientApplicationIdInput: string;
```

- *Type:* string

---

##### `clusterApplicationIdInput`<sup>Optional</sup> <a name="clusterApplicationIdInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.property.clusterApplicationIdInput"></a>

```typescript
public readonly clusterApplicationIdInput: string;
```

- *Type:* string

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `clientApplicationId`<sup>Required</sup> <a name="clientApplicationId" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.property.clientApplicationId"></a>

```typescript
public readonly clientApplicationId: string;
```

- *Type:* string

---

##### `clusterApplicationId`<sup>Required</sup> <a name="clusterApplicationId" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.property.clusterApplicationId"></a>

```typescript
public readonly clusterApplicationId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceFabricClusterAzureActiveDirectory;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectory">ServiceFabricClusterAzureActiveDirectory</a>

---


### ServiceFabricClusterCertificateCommonNamesCommonNamesList <a name="ServiceFabricClusterCertificateCommonNamesCommonNamesList" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.Initializer"></a>

```typescript
import { serviceFabricCluster } from '@cdktf/provider-azurerm'

new serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.get"></a>

```typescript
public get(index: number): ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNames">ServiceFabricClusterCertificateCommonNamesCommonNames</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceFabricClusterCertificateCommonNamesCommonNames[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNames">ServiceFabricClusterCertificateCommonNamesCommonNames</a>[]

---


### ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference <a name="ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.Initializer"></a>

```typescript
import { serviceFabricCluster } from '@cdktf/provider-azurerm'

new serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.resetCertificateIssuerThumbprint">resetCertificateIssuerThumbprint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateIssuerThumbprint` <a name="resetCertificateIssuerThumbprint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.resetCertificateIssuerThumbprint"></a>

```typescript
public resetCertificateIssuerThumbprint(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.property.certificateCommonNameInput">certificateCommonNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.property.certificateIssuerThumbprintInput">certificateIssuerThumbprintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.property.certificateCommonName">certificateCommonName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.property.certificateIssuerThumbprint">certificateIssuerThumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNames">ServiceFabricClusterCertificateCommonNamesCommonNames</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateCommonNameInput`<sup>Optional</sup> <a name="certificateCommonNameInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.property.certificateCommonNameInput"></a>

```typescript
public readonly certificateCommonNameInput: string;
```

- *Type:* string

---

##### `certificateIssuerThumbprintInput`<sup>Optional</sup> <a name="certificateIssuerThumbprintInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.property.certificateIssuerThumbprintInput"></a>

```typescript
public readonly certificateIssuerThumbprintInput: string;
```

- *Type:* string

---

##### `certificateCommonName`<sup>Required</sup> <a name="certificateCommonName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.property.certificateCommonName"></a>

```typescript
public readonly certificateCommonName: string;
```

- *Type:* string

---

##### `certificateIssuerThumbprint`<sup>Required</sup> <a name="certificateIssuerThumbprint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.property.certificateIssuerThumbprint"></a>

```typescript
public readonly certificateIssuerThumbprint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceFabricClusterCertificateCommonNamesCommonNames;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNames">ServiceFabricClusterCertificateCommonNamesCommonNames</a>

---


### ServiceFabricClusterCertificateCommonNamesOutputReference <a name="ServiceFabricClusterCertificateCommonNamesOutputReference" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.Initializer"></a>

```typescript
import { serviceFabricCluster } from '@cdktf/provider-azurerm'

new serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.putCommonNames">putCommonNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCommonNames` <a name="putCommonNames" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.putCommonNames"></a>

```typescript
public putCommonNames(value: IResolvable | ServiceFabricClusterCertificateCommonNamesCommonNames[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.putCommonNames.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNames">ServiceFabricClusterCertificateCommonNamesCommonNames</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.property.commonNames">commonNames</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList">ServiceFabricClusterCertificateCommonNamesCommonNamesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.property.commonNamesInput">commonNamesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNames">ServiceFabricClusterCertificateCommonNamesCommonNames</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.property.x509StoreNameInput">x509StoreNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.property.x509StoreName">x509StoreName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNames">ServiceFabricClusterCertificateCommonNames</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commonNames`<sup>Required</sup> <a name="commonNames" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.property.commonNames"></a>

```typescript
public readonly commonNames: ServiceFabricClusterCertificateCommonNamesCommonNamesList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList">ServiceFabricClusterCertificateCommonNamesCommonNamesList</a>

---

##### `commonNamesInput`<sup>Optional</sup> <a name="commonNamesInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.property.commonNamesInput"></a>

```typescript
public readonly commonNamesInput: IResolvable | ServiceFabricClusterCertificateCommonNamesCommonNames[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNames">ServiceFabricClusterCertificateCommonNamesCommonNames</a>[]

---

##### `x509StoreNameInput`<sup>Optional</sup> <a name="x509StoreNameInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.property.x509StoreNameInput"></a>

```typescript
public readonly x509StoreNameInput: string;
```

- *Type:* string

---

##### `x509StoreName`<sup>Required</sup> <a name="x509StoreName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.property.x509StoreName"></a>

```typescript
public readonly x509StoreName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceFabricClusterCertificateCommonNames;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNames">ServiceFabricClusterCertificateCommonNames</a>

---


### ServiceFabricClusterCertificateOutputReference <a name="ServiceFabricClusterCertificateOutputReference" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.Initializer"></a>

```typescript
import { serviceFabricCluster } from '@cdktf/provider-azurerm'

new serviceFabricCluster.ServiceFabricClusterCertificateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.resetThumbprintSecondary">resetThumbprintSecondary</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetThumbprintSecondary` <a name="resetThumbprintSecondary" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.resetThumbprintSecondary"></a>

```typescript
public resetThumbprintSecondary(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.property.thumbprintInput">thumbprintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.property.thumbprintSecondaryInput">thumbprintSecondaryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.property.x509StoreNameInput">x509StoreNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.property.thumbprint">thumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.property.thumbprintSecondary">thumbprintSecondary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.property.x509StoreName">x509StoreName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificate">ServiceFabricClusterCertificate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `thumbprintInput`<sup>Optional</sup> <a name="thumbprintInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.property.thumbprintInput"></a>

```typescript
public readonly thumbprintInput: string;
```

- *Type:* string

---

##### `thumbprintSecondaryInput`<sup>Optional</sup> <a name="thumbprintSecondaryInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.property.thumbprintSecondaryInput"></a>

```typescript
public readonly thumbprintSecondaryInput: string;
```

- *Type:* string

---

##### `x509StoreNameInput`<sup>Optional</sup> <a name="x509StoreNameInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.property.x509StoreNameInput"></a>

```typescript
public readonly x509StoreNameInput: string;
```

- *Type:* string

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.property.thumbprint"></a>

```typescript
public readonly thumbprint: string;
```

- *Type:* string

---

##### `thumbprintSecondary`<sup>Required</sup> <a name="thumbprintSecondary" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.property.thumbprintSecondary"></a>

```typescript
public readonly thumbprintSecondary: string;
```

- *Type:* string

---

##### `x509StoreName`<sup>Required</sup> <a name="x509StoreName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.property.x509StoreName"></a>

```typescript
public readonly x509StoreName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceFabricClusterCertificate;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificate">ServiceFabricClusterCertificate</a>

---


### ServiceFabricClusterClientCertificateCommonNameList <a name="ServiceFabricClusterClientCertificateCommonNameList" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.Initializer"></a>

```typescript
import { serviceFabricCluster } from '@cdktf/provider-azurerm'

new serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.get"></a>

```typescript
public get(index: number): ServiceFabricClusterClientCertificateCommonNameOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonName">ServiceFabricClusterClientCertificateCommonName</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceFabricClusterClientCertificateCommonName[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonName">ServiceFabricClusterClientCertificateCommonName</a>[]

---


### ServiceFabricClusterClientCertificateCommonNameOutputReference <a name="ServiceFabricClusterClientCertificateCommonNameOutputReference" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.Initializer"></a>

```typescript
import { serviceFabricCluster } from '@cdktf/provider-azurerm'

new serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.resetIssuerThumbprint">resetIssuerThumbprint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIssuerThumbprint` <a name="resetIssuerThumbprint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.resetIssuerThumbprint"></a>

```typescript
public resetIssuerThumbprint(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.property.commonNameInput">commonNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.property.isAdminInput">isAdminInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.property.issuerThumbprintInput">issuerThumbprintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.property.commonName">commonName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.property.isAdmin">isAdmin</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.property.issuerThumbprint">issuerThumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonName">ServiceFabricClusterClientCertificateCommonName</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commonNameInput`<sup>Optional</sup> <a name="commonNameInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.property.commonNameInput"></a>

```typescript
public readonly commonNameInput: string;
```

- *Type:* string

---

##### `isAdminInput`<sup>Optional</sup> <a name="isAdminInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.property.isAdminInput"></a>

```typescript
public readonly isAdminInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `issuerThumbprintInput`<sup>Optional</sup> <a name="issuerThumbprintInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.property.issuerThumbprintInput"></a>

```typescript
public readonly issuerThumbprintInput: string;
```

- *Type:* string

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.property.commonName"></a>

```typescript
public readonly commonName: string;
```

- *Type:* string

---

##### `isAdmin`<sup>Required</sup> <a name="isAdmin" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.property.isAdmin"></a>

```typescript
public readonly isAdmin: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `issuerThumbprint`<sup>Required</sup> <a name="issuerThumbprint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.property.issuerThumbprint"></a>

```typescript
public readonly issuerThumbprint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceFabricClusterClientCertificateCommonName;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonName">ServiceFabricClusterClientCertificateCommonName</a>

---


### ServiceFabricClusterClientCertificateThumbprintList <a name="ServiceFabricClusterClientCertificateThumbprintList" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.Initializer"></a>

```typescript
import { serviceFabricCluster } from '@cdktf/provider-azurerm'

new serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.get"></a>

```typescript
public get(index: number): ServiceFabricClusterClientCertificateThumbprintOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprint">ServiceFabricClusterClientCertificateThumbprint</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceFabricClusterClientCertificateThumbprint[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprint">ServiceFabricClusterClientCertificateThumbprint</a>[]

---


### ServiceFabricClusterClientCertificateThumbprintOutputReference <a name="ServiceFabricClusterClientCertificateThumbprintOutputReference" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.Initializer"></a>

```typescript
import { serviceFabricCluster } from '@cdktf/provider-azurerm'

new serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.property.isAdminInput">isAdminInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.property.thumbprintInput">thumbprintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.property.isAdmin">isAdmin</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.property.thumbprint">thumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprint">ServiceFabricClusterClientCertificateThumbprint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isAdminInput`<sup>Optional</sup> <a name="isAdminInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.property.isAdminInput"></a>

```typescript
public readonly isAdminInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `thumbprintInput`<sup>Optional</sup> <a name="thumbprintInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.property.thumbprintInput"></a>

```typescript
public readonly thumbprintInput: string;
```

- *Type:* string

---

##### `isAdmin`<sup>Required</sup> <a name="isAdmin" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.property.isAdmin"></a>

```typescript
public readonly isAdmin: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.property.thumbprint"></a>

```typescript
public readonly thumbprint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceFabricClusterClientCertificateThumbprint;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprint">ServiceFabricClusterClientCertificateThumbprint</a>

---


### ServiceFabricClusterDiagnosticsConfigOutputReference <a name="ServiceFabricClusterDiagnosticsConfigOutputReference" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.Initializer"></a>

```typescript
import { serviceFabricCluster } from '@cdktf/provider-azurerm'

new serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.blobEndpointInput">blobEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.protectedAccountKeyNameInput">protectedAccountKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.queueEndpointInput">queueEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.storageAccountNameInput">storageAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.tableEndpointInput">tableEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.blobEndpoint">blobEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.protectedAccountKeyName">protectedAccountKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.queueEndpoint">queueEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.storageAccountName">storageAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.tableEndpoint">tableEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfig">ServiceFabricClusterDiagnosticsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `blobEndpointInput`<sup>Optional</sup> <a name="blobEndpointInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.blobEndpointInput"></a>

```typescript
public readonly blobEndpointInput: string;
```

- *Type:* string

---

##### `protectedAccountKeyNameInput`<sup>Optional</sup> <a name="protectedAccountKeyNameInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.protectedAccountKeyNameInput"></a>

```typescript
public readonly protectedAccountKeyNameInput: string;
```

- *Type:* string

---

##### `queueEndpointInput`<sup>Optional</sup> <a name="queueEndpointInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.queueEndpointInput"></a>

```typescript
public readonly queueEndpointInput: string;
```

- *Type:* string

---

##### `storageAccountNameInput`<sup>Optional</sup> <a name="storageAccountNameInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.storageAccountNameInput"></a>

```typescript
public readonly storageAccountNameInput: string;
```

- *Type:* string

---

##### `tableEndpointInput`<sup>Optional</sup> <a name="tableEndpointInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.tableEndpointInput"></a>

```typescript
public readonly tableEndpointInput: string;
```

- *Type:* string

---

##### `blobEndpoint`<sup>Required</sup> <a name="blobEndpoint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.blobEndpoint"></a>

```typescript
public readonly blobEndpoint: string;
```

- *Type:* string

---

##### `protectedAccountKeyName`<sup>Required</sup> <a name="protectedAccountKeyName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.protectedAccountKeyName"></a>

```typescript
public readonly protectedAccountKeyName: string;
```

- *Type:* string

---

##### `queueEndpoint`<sup>Required</sup> <a name="queueEndpoint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.queueEndpoint"></a>

```typescript
public readonly queueEndpoint: string;
```

- *Type:* string

---

##### `storageAccountName`<sup>Required</sup> <a name="storageAccountName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.storageAccountName"></a>

```typescript
public readonly storageAccountName: string;
```

- *Type:* string

---

##### `tableEndpoint`<sup>Required</sup> <a name="tableEndpoint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.tableEndpoint"></a>

```typescript
public readonly tableEndpoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceFabricClusterDiagnosticsConfig;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfig">ServiceFabricClusterDiagnosticsConfig</a>

---


### ServiceFabricClusterFabricSettingsList <a name="ServiceFabricClusterFabricSettingsList" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.Initializer"></a>

```typescript
import { serviceFabricCluster } from '@cdktf/provider-azurerm'

new serviceFabricCluster.ServiceFabricClusterFabricSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.get"></a>

```typescript
public get(index: number): ServiceFabricClusterFabricSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettings">ServiceFabricClusterFabricSettings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceFabricClusterFabricSettings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettings">ServiceFabricClusterFabricSettings</a>[]

---


### ServiceFabricClusterFabricSettingsOutputReference <a name="ServiceFabricClusterFabricSettingsOutputReference" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.Initializer"></a>

```typescript
import { serviceFabricCluster } from '@cdktf/provider-azurerm'

new serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettings">ServiceFabricClusterFabricSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceFabricClusterFabricSettings;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettings">ServiceFabricClusterFabricSettings</a>

---


### ServiceFabricClusterNodeTypeApplicationPortsOutputReference <a name="ServiceFabricClusterNodeTypeApplicationPortsOutputReference" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.Initializer"></a>

```typescript
import { serviceFabricCluster } from '@cdktf/provider-azurerm'

new serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.property.endPortInput">endPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.property.startPortInput">startPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.property.endPort">endPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.property.startPort">startPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPorts">ServiceFabricClusterNodeTypeApplicationPorts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endPortInput`<sup>Optional</sup> <a name="endPortInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.property.endPortInput"></a>

```typescript
public readonly endPortInput: number;
```

- *Type:* number

---

##### `startPortInput`<sup>Optional</sup> <a name="startPortInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.property.startPortInput"></a>

```typescript
public readonly startPortInput: number;
```

- *Type:* number

---

##### `endPort`<sup>Required</sup> <a name="endPort" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.property.endPort"></a>

```typescript
public readonly endPort: number;
```

- *Type:* number

---

##### `startPort`<sup>Required</sup> <a name="startPort" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.property.startPort"></a>

```typescript
public readonly startPort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceFabricClusterNodeTypeApplicationPorts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPorts">ServiceFabricClusterNodeTypeApplicationPorts</a>

---


### ServiceFabricClusterNodeTypeEphemeralPortsOutputReference <a name="ServiceFabricClusterNodeTypeEphemeralPortsOutputReference" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.Initializer"></a>

```typescript
import { serviceFabricCluster } from '@cdktf/provider-azurerm'

new serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.property.endPortInput">endPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.property.startPortInput">startPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.property.endPort">endPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.property.startPort">startPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPorts">ServiceFabricClusterNodeTypeEphemeralPorts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endPortInput`<sup>Optional</sup> <a name="endPortInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.property.endPortInput"></a>

```typescript
public readonly endPortInput: number;
```

- *Type:* number

---

##### `startPortInput`<sup>Optional</sup> <a name="startPortInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.property.startPortInput"></a>

```typescript
public readonly startPortInput: number;
```

- *Type:* number

---

##### `endPort`<sup>Required</sup> <a name="endPort" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.property.endPort"></a>

```typescript
public readonly endPort: number;
```

- *Type:* number

---

##### `startPort`<sup>Required</sup> <a name="startPort" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.property.startPort"></a>

```typescript
public readonly startPort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceFabricClusterNodeTypeEphemeralPorts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPorts">ServiceFabricClusterNodeTypeEphemeralPorts</a>

---


### ServiceFabricClusterNodeTypeList <a name="ServiceFabricClusterNodeTypeList" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.Initializer"></a>

```typescript
import { serviceFabricCluster } from '@cdktf/provider-azurerm'

new serviceFabricCluster.ServiceFabricClusterNodeTypeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.get"></a>

```typescript
public get(index: number): ServiceFabricClusterNodeTypeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType">ServiceFabricClusterNodeType</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceFabricClusterNodeType[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType">ServiceFabricClusterNodeType</a>[]

---


### ServiceFabricClusterNodeTypeOutputReference <a name="ServiceFabricClusterNodeTypeOutputReference" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.Initializer"></a>

```typescript
import { serviceFabricCluster } from '@cdktf/provider-azurerm'

new serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.putApplicationPorts">putApplicationPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.putEphemeralPorts">putEphemeralPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.resetApplicationPorts">resetApplicationPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.resetCapacities">resetCapacities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.resetDurabilityLevel">resetDurabilityLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.resetEphemeralPorts">resetEphemeralPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.resetIsStateless">resetIsStateless</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.resetMultipleAvailabilityZones">resetMultipleAvailabilityZones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.resetPlacementProperties">resetPlacementProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.resetReverseProxyEndpointPort">resetReverseProxyEndpointPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApplicationPorts` <a name="putApplicationPorts" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.putApplicationPorts"></a>

```typescript
public putApplicationPorts(value: ServiceFabricClusterNodeTypeApplicationPorts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.putApplicationPorts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPorts">ServiceFabricClusterNodeTypeApplicationPorts</a>

---

##### `putEphemeralPorts` <a name="putEphemeralPorts" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.putEphemeralPorts"></a>

```typescript
public putEphemeralPorts(value: ServiceFabricClusterNodeTypeEphemeralPorts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.putEphemeralPorts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPorts">ServiceFabricClusterNodeTypeEphemeralPorts</a>

---

##### `resetApplicationPorts` <a name="resetApplicationPorts" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.resetApplicationPorts"></a>

```typescript
public resetApplicationPorts(): void
```

##### `resetCapacities` <a name="resetCapacities" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.resetCapacities"></a>

```typescript
public resetCapacities(): void
```

##### `resetDurabilityLevel` <a name="resetDurabilityLevel" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.resetDurabilityLevel"></a>

```typescript
public resetDurabilityLevel(): void
```

##### `resetEphemeralPorts` <a name="resetEphemeralPorts" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.resetEphemeralPorts"></a>

```typescript
public resetEphemeralPorts(): void
```

##### `resetIsStateless` <a name="resetIsStateless" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.resetIsStateless"></a>

```typescript
public resetIsStateless(): void
```

##### `resetMultipleAvailabilityZones` <a name="resetMultipleAvailabilityZones" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.resetMultipleAvailabilityZones"></a>

```typescript
public resetMultipleAvailabilityZones(): void
```

##### `resetPlacementProperties` <a name="resetPlacementProperties" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.resetPlacementProperties"></a>

```typescript
public resetPlacementProperties(): void
```

##### `resetReverseProxyEndpointPort` <a name="resetReverseProxyEndpointPort" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.resetReverseProxyEndpointPort"></a>

```typescript
public resetReverseProxyEndpointPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.applicationPorts">applicationPorts</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference">ServiceFabricClusterNodeTypeApplicationPortsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.ephemeralPorts">ephemeralPorts</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference">ServiceFabricClusterNodeTypeEphemeralPortsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.applicationPortsInput">applicationPortsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPorts">ServiceFabricClusterNodeTypeApplicationPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.capacitiesInput">capacitiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.clientEndpointPortInput">clientEndpointPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.durabilityLevelInput">durabilityLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.ephemeralPortsInput">ephemeralPortsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPorts">ServiceFabricClusterNodeTypeEphemeralPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.httpEndpointPortInput">httpEndpointPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.instanceCountInput">instanceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.isPrimaryInput">isPrimaryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.isStatelessInput">isStatelessInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.multipleAvailabilityZonesInput">multipleAvailabilityZonesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.placementPropertiesInput">placementPropertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.reverseProxyEndpointPortInput">reverseProxyEndpointPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.capacities">capacities</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.clientEndpointPort">clientEndpointPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.durabilityLevel">durabilityLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.httpEndpointPort">httpEndpointPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.instanceCount">instanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.isPrimary">isPrimary</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.isStateless">isStateless</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.multipleAvailabilityZones">multipleAvailabilityZones</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.placementProperties">placementProperties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.reverseProxyEndpointPort">reverseProxyEndpointPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType">ServiceFabricClusterNodeType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationPorts`<sup>Required</sup> <a name="applicationPorts" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.applicationPorts"></a>

```typescript
public readonly applicationPorts: ServiceFabricClusterNodeTypeApplicationPortsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference">ServiceFabricClusterNodeTypeApplicationPortsOutputReference</a>

---

##### `ephemeralPorts`<sup>Required</sup> <a name="ephemeralPorts" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.ephemeralPorts"></a>

```typescript
public readonly ephemeralPorts: ServiceFabricClusterNodeTypeEphemeralPortsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference">ServiceFabricClusterNodeTypeEphemeralPortsOutputReference</a>

---

##### `applicationPortsInput`<sup>Optional</sup> <a name="applicationPortsInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.applicationPortsInput"></a>

```typescript
public readonly applicationPortsInput: ServiceFabricClusterNodeTypeApplicationPorts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPorts">ServiceFabricClusterNodeTypeApplicationPorts</a>

---

##### `capacitiesInput`<sup>Optional</sup> <a name="capacitiesInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.capacitiesInput"></a>

```typescript
public readonly capacitiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `clientEndpointPortInput`<sup>Optional</sup> <a name="clientEndpointPortInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.clientEndpointPortInput"></a>

```typescript
public readonly clientEndpointPortInput: number;
```

- *Type:* number

---

##### `durabilityLevelInput`<sup>Optional</sup> <a name="durabilityLevelInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.durabilityLevelInput"></a>

```typescript
public readonly durabilityLevelInput: string;
```

- *Type:* string

---

##### `ephemeralPortsInput`<sup>Optional</sup> <a name="ephemeralPortsInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.ephemeralPortsInput"></a>

```typescript
public readonly ephemeralPortsInput: ServiceFabricClusterNodeTypeEphemeralPorts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPorts">ServiceFabricClusterNodeTypeEphemeralPorts</a>

---

##### `httpEndpointPortInput`<sup>Optional</sup> <a name="httpEndpointPortInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.httpEndpointPortInput"></a>

```typescript
public readonly httpEndpointPortInput: number;
```

- *Type:* number

---

##### `instanceCountInput`<sup>Optional</sup> <a name="instanceCountInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.instanceCountInput"></a>

```typescript
public readonly instanceCountInput: number;
```

- *Type:* number

---

##### `isPrimaryInput`<sup>Optional</sup> <a name="isPrimaryInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.isPrimaryInput"></a>

```typescript
public readonly isPrimaryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isStatelessInput`<sup>Optional</sup> <a name="isStatelessInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.isStatelessInput"></a>

```typescript
public readonly isStatelessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `multipleAvailabilityZonesInput`<sup>Optional</sup> <a name="multipleAvailabilityZonesInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.multipleAvailabilityZonesInput"></a>

```typescript
public readonly multipleAvailabilityZonesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `placementPropertiesInput`<sup>Optional</sup> <a name="placementPropertiesInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.placementPropertiesInput"></a>

```typescript
public readonly placementPropertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `reverseProxyEndpointPortInput`<sup>Optional</sup> <a name="reverseProxyEndpointPortInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.reverseProxyEndpointPortInput"></a>

```typescript
public readonly reverseProxyEndpointPortInput: number;
```

- *Type:* number

---

##### `capacities`<sup>Required</sup> <a name="capacities" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.capacities"></a>

```typescript
public readonly capacities: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `clientEndpointPort`<sup>Required</sup> <a name="clientEndpointPort" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.clientEndpointPort"></a>

```typescript
public readonly clientEndpointPort: number;
```

- *Type:* number

---

##### `durabilityLevel`<sup>Required</sup> <a name="durabilityLevel" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.durabilityLevel"></a>

```typescript
public readonly durabilityLevel: string;
```

- *Type:* string

---

##### `httpEndpointPort`<sup>Required</sup> <a name="httpEndpointPort" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.httpEndpointPort"></a>

```typescript
public readonly httpEndpointPort: number;
```

- *Type:* number

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.instanceCount"></a>

```typescript
public readonly instanceCount: number;
```

- *Type:* number

---

##### `isPrimary`<sup>Required</sup> <a name="isPrimary" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.isPrimary"></a>

```typescript
public readonly isPrimary: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isStateless`<sup>Required</sup> <a name="isStateless" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.isStateless"></a>

```typescript
public readonly isStateless: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `multipleAvailabilityZones`<sup>Required</sup> <a name="multipleAvailabilityZones" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.multipleAvailabilityZones"></a>

```typescript
public readonly multipleAvailabilityZones: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `placementProperties`<sup>Required</sup> <a name="placementProperties" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.placementProperties"></a>

```typescript
public readonly placementProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `reverseProxyEndpointPort`<sup>Required</sup> <a name="reverseProxyEndpointPort" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.reverseProxyEndpointPort"></a>

```typescript
public readonly reverseProxyEndpointPort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceFabricClusterNodeType;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType">ServiceFabricClusterNodeType</a>

---


### ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList <a name="ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.Initializer"></a>

```typescript
import { serviceFabricCluster } from '@cdktf/provider-azurerm'

new serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.get"></a>

```typescript
public get(index: number): ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames">ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames">ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames</a>[]

---


### ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference <a name="ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.Initializer"></a>

```typescript
import { serviceFabricCluster } from '@cdktf/provider-azurerm'

new serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.resetCertificateIssuerThumbprint">resetCertificateIssuerThumbprint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateIssuerThumbprint` <a name="resetCertificateIssuerThumbprint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.resetCertificateIssuerThumbprint"></a>

```typescript
public resetCertificateIssuerThumbprint(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.property.certificateCommonNameInput">certificateCommonNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.property.certificateIssuerThumbprintInput">certificateIssuerThumbprintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.property.certificateCommonName">certificateCommonName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.property.certificateIssuerThumbprint">certificateIssuerThumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames">ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateCommonNameInput`<sup>Optional</sup> <a name="certificateCommonNameInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.property.certificateCommonNameInput"></a>

```typescript
public readonly certificateCommonNameInput: string;
```

- *Type:* string

---

##### `certificateIssuerThumbprintInput`<sup>Optional</sup> <a name="certificateIssuerThumbprintInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.property.certificateIssuerThumbprintInput"></a>

```typescript
public readonly certificateIssuerThumbprintInput: string;
```

- *Type:* string

---

##### `certificateCommonName`<sup>Required</sup> <a name="certificateCommonName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.property.certificateCommonName"></a>

```typescript
public readonly certificateCommonName: string;
```

- *Type:* string

---

##### `certificateIssuerThumbprint`<sup>Required</sup> <a name="certificateIssuerThumbprint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.property.certificateIssuerThumbprint"></a>

```typescript
public readonly certificateIssuerThumbprint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames">ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames</a>

---


### ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference <a name="ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.Initializer"></a>

```typescript
import { serviceFabricCluster } from '@cdktf/provider-azurerm'

new serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.putCommonNames">putCommonNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCommonNames` <a name="putCommonNames" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.putCommonNames"></a>

```typescript
public putCommonNames(value: IResolvable | ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.putCommonNames.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames">ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.property.commonNames">commonNames</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList">ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.property.commonNamesInput">commonNamesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames">ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.property.x509StoreNameInput">x509StoreNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.property.x509StoreName">x509StoreName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNames">ServiceFabricClusterReverseProxyCertificateCommonNames</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commonNames`<sup>Required</sup> <a name="commonNames" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.property.commonNames"></a>

```typescript
public readonly commonNames: ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList">ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList</a>

---

##### `commonNamesInput`<sup>Optional</sup> <a name="commonNamesInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.property.commonNamesInput"></a>

```typescript
public readonly commonNamesInput: IResolvable | ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames">ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames</a>[]

---

##### `x509StoreNameInput`<sup>Optional</sup> <a name="x509StoreNameInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.property.x509StoreNameInput"></a>

```typescript
public readonly x509StoreNameInput: string;
```

- *Type:* string

---

##### `x509StoreName`<sup>Required</sup> <a name="x509StoreName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.property.x509StoreName"></a>

```typescript
public readonly x509StoreName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceFabricClusterReverseProxyCertificateCommonNames;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNames">ServiceFabricClusterReverseProxyCertificateCommonNames</a>

---


### ServiceFabricClusterReverseProxyCertificateOutputReference <a name="ServiceFabricClusterReverseProxyCertificateOutputReference" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.Initializer"></a>

```typescript
import { serviceFabricCluster } from '@cdktf/provider-azurerm'

new serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.resetThumbprintSecondary">resetThumbprintSecondary</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetThumbprintSecondary` <a name="resetThumbprintSecondary" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.resetThumbprintSecondary"></a>

```typescript
public resetThumbprintSecondary(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.property.thumbprintInput">thumbprintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.property.thumbprintSecondaryInput">thumbprintSecondaryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.property.x509StoreNameInput">x509StoreNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.property.thumbprint">thumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.property.thumbprintSecondary">thumbprintSecondary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.property.x509StoreName">x509StoreName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificate">ServiceFabricClusterReverseProxyCertificate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `thumbprintInput`<sup>Optional</sup> <a name="thumbprintInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.property.thumbprintInput"></a>

```typescript
public readonly thumbprintInput: string;
```

- *Type:* string

---

##### `thumbprintSecondaryInput`<sup>Optional</sup> <a name="thumbprintSecondaryInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.property.thumbprintSecondaryInput"></a>

```typescript
public readonly thumbprintSecondaryInput: string;
```

- *Type:* string

---

##### `x509StoreNameInput`<sup>Optional</sup> <a name="x509StoreNameInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.property.x509StoreNameInput"></a>

```typescript
public readonly x509StoreNameInput: string;
```

- *Type:* string

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.property.thumbprint"></a>

```typescript
public readonly thumbprint: string;
```

- *Type:* string

---

##### `thumbprintSecondary`<sup>Required</sup> <a name="thumbprintSecondary" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.property.thumbprintSecondary"></a>

```typescript
public readonly thumbprintSecondary: string;
```

- *Type:* string

---

##### `x509StoreName`<sup>Required</sup> <a name="x509StoreName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.property.x509StoreName"></a>

```typescript
public readonly x509StoreName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceFabricClusterReverseProxyCertificate;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificate">ServiceFabricClusterReverseProxyCertificate</a>

---


### ServiceFabricClusterTimeoutsOutputReference <a name="ServiceFabricClusterTimeoutsOutputReference" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.Initializer"></a>

```typescript
import { serviceFabricCluster } from '@cdktf/provider-azurerm'

new serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeouts">ServiceFabricClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceFabricClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeouts">ServiceFabricClusterTimeouts</a>

---


### ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference <a name="ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.Initializer"></a>

```typescript
import { serviceFabricCluster } from '@cdktf/provider-azurerm'

new serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.resetMaxDeltaUnhealthyApplicationsPercent">resetMaxDeltaUnhealthyApplicationsPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.resetMaxDeltaUnhealthyNodesPercent">resetMaxDeltaUnhealthyNodesPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.resetMaxUpgradeDomainDeltaUnhealthyNodesPercent">resetMaxUpgradeDomainDeltaUnhealthyNodesPercent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxDeltaUnhealthyApplicationsPercent` <a name="resetMaxDeltaUnhealthyApplicationsPercent" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.resetMaxDeltaUnhealthyApplicationsPercent"></a>

```typescript
public resetMaxDeltaUnhealthyApplicationsPercent(): void
```

##### `resetMaxDeltaUnhealthyNodesPercent` <a name="resetMaxDeltaUnhealthyNodesPercent" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.resetMaxDeltaUnhealthyNodesPercent"></a>

```typescript
public resetMaxDeltaUnhealthyNodesPercent(): void
```

##### `resetMaxUpgradeDomainDeltaUnhealthyNodesPercent` <a name="resetMaxUpgradeDomainDeltaUnhealthyNodesPercent" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.resetMaxUpgradeDomainDeltaUnhealthyNodesPercent"></a>

```typescript
public resetMaxUpgradeDomainDeltaUnhealthyNodesPercent(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.property.maxDeltaUnhealthyApplicationsPercentInput">maxDeltaUnhealthyApplicationsPercentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.property.maxDeltaUnhealthyNodesPercentInput">maxDeltaUnhealthyNodesPercentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.property.maxUpgradeDomainDeltaUnhealthyNodesPercentInput">maxUpgradeDomainDeltaUnhealthyNodesPercentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.property.maxDeltaUnhealthyApplicationsPercent">maxDeltaUnhealthyApplicationsPercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.property.maxDeltaUnhealthyNodesPercent">maxDeltaUnhealthyNodesPercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.property.maxUpgradeDomainDeltaUnhealthyNodesPercent">maxUpgradeDomainDeltaUnhealthyNodesPercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicy">ServiceFabricClusterUpgradePolicyDeltaHealthPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxDeltaUnhealthyApplicationsPercentInput`<sup>Optional</sup> <a name="maxDeltaUnhealthyApplicationsPercentInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.property.maxDeltaUnhealthyApplicationsPercentInput"></a>

```typescript
public readonly maxDeltaUnhealthyApplicationsPercentInput: number;
```

- *Type:* number

---

##### `maxDeltaUnhealthyNodesPercentInput`<sup>Optional</sup> <a name="maxDeltaUnhealthyNodesPercentInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.property.maxDeltaUnhealthyNodesPercentInput"></a>

```typescript
public readonly maxDeltaUnhealthyNodesPercentInput: number;
```

- *Type:* number

---

##### `maxUpgradeDomainDeltaUnhealthyNodesPercentInput`<sup>Optional</sup> <a name="maxUpgradeDomainDeltaUnhealthyNodesPercentInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.property.maxUpgradeDomainDeltaUnhealthyNodesPercentInput"></a>

```typescript
public readonly maxUpgradeDomainDeltaUnhealthyNodesPercentInput: number;
```

- *Type:* number

---

##### `maxDeltaUnhealthyApplicationsPercent`<sup>Required</sup> <a name="maxDeltaUnhealthyApplicationsPercent" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.property.maxDeltaUnhealthyApplicationsPercent"></a>

```typescript
public readonly maxDeltaUnhealthyApplicationsPercent: number;
```

- *Type:* number

---

##### `maxDeltaUnhealthyNodesPercent`<sup>Required</sup> <a name="maxDeltaUnhealthyNodesPercent" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.property.maxDeltaUnhealthyNodesPercent"></a>

```typescript
public readonly maxDeltaUnhealthyNodesPercent: number;
```

- *Type:* number

---

##### `maxUpgradeDomainDeltaUnhealthyNodesPercent`<sup>Required</sup> <a name="maxUpgradeDomainDeltaUnhealthyNodesPercent" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.property.maxUpgradeDomainDeltaUnhealthyNodesPercent"></a>

```typescript
public readonly maxUpgradeDomainDeltaUnhealthyNodesPercent: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceFabricClusterUpgradePolicyDeltaHealthPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicy">ServiceFabricClusterUpgradePolicyDeltaHealthPolicy</a>

---


### ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference <a name="ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.Initializer"></a>

```typescript
import { serviceFabricCluster } from '@cdktf/provider-azurerm'

new serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.resetMaxUnhealthyApplicationsPercent">resetMaxUnhealthyApplicationsPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.resetMaxUnhealthyNodesPercent">resetMaxUnhealthyNodesPercent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxUnhealthyApplicationsPercent` <a name="resetMaxUnhealthyApplicationsPercent" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.resetMaxUnhealthyApplicationsPercent"></a>

```typescript
public resetMaxUnhealthyApplicationsPercent(): void
```

##### `resetMaxUnhealthyNodesPercent` <a name="resetMaxUnhealthyNodesPercent" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.resetMaxUnhealthyNodesPercent"></a>

```typescript
public resetMaxUnhealthyNodesPercent(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.property.maxUnhealthyApplicationsPercentInput">maxUnhealthyApplicationsPercentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.property.maxUnhealthyNodesPercentInput">maxUnhealthyNodesPercentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.property.maxUnhealthyApplicationsPercent">maxUnhealthyApplicationsPercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.property.maxUnhealthyNodesPercent">maxUnhealthyNodesPercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicy">ServiceFabricClusterUpgradePolicyHealthPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxUnhealthyApplicationsPercentInput`<sup>Optional</sup> <a name="maxUnhealthyApplicationsPercentInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.property.maxUnhealthyApplicationsPercentInput"></a>

```typescript
public readonly maxUnhealthyApplicationsPercentInput: number;
```

- *Type:* number

---

##### `maxUnhealthyNodesPercentInput`<sup>Optional</sup> <a name="maxUnhealthyNodesPercentInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.property.maxUnhealthyNodesPercentInput"></a>

```typescript
public readonly maxUnhealthyNodesPercentInput: number;
```

- *Type:* number

---

##### `maxUnhealthyApplicationsPercent`<sup>Required</sup> <a name="maxUnhealthyApplicationsPercent" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.property.maxUnhealthyApplicationsPercent"></a>

```typescript
public readonly maxUnhealthyApplicationsPercent: number;
```

- *Type:* number

---

##### `maxUnhealthyNodesPercent`<sup>Required</sup> <a name="maxUnhealthyNodesPercent" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.property.maxUnhealthyNodesPercent"></a>

```typescript
public readonly maxUnhealthyNodesPercent: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceFabricClusterUpgradePolicyHealthPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicy">ServiceFabricClusterUpgradePolicyHealthPolicy</a>

---


### ServiceFabricClusterUpgradePolicyOutputReference <a name="ServiceFabricClusterUpgradePolicyOutputReference" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.Initializer"></a>

```typescript
import { serviceFabricCluster } from '@cdktf/provider-azurerm'

new serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.putDeltaHealthPolicy">putDeltaHealthPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.putHealthPolicy">putHealthPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resetDeltaHealthPolicy">resetDeltaHealthPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resetForceRestartEnabled">resetForceRestartEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resetHealthCheckRetryTimeout">resetHealthCheckRetryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resetHealthCheckStableDuration">resetHealthCheckStableDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resetHealthCheckWaitDuration">resetHealthCheckWaitDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resetHealthPolicy">resetHealthPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resetUpgradeDomainTimeout">resetUpgradeDomainTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resetUpgradeReplicaSetCheckTimeout">resetUpgradeReplicaSetCheckTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resetUpgradeTimeout">resetUpgradeTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDeltaHealthPolicy` <a name="putDeltaHealthPolicy" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.putDeltaHealthPolicy"></a>

```typescript
public putDeltaHealthPolicy(value: ServiceFabricClusterUpgradePolicyDeltaHealthPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.putDeltaHealthPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicy">ServiceFabricClusterUpgradePolicyDeltaHealthPolicy</a>

---

##### `putHealthPolicy` <a name="putHealthPolicy" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.putHealthPolicy"></a>

```typescript
public putHealthPolicy(value: ServiceFabricClusterUpgradePolicyHealthPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.putHealthPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicy">ServiceFabricClusterUpgradePolicyHealthPolicy</a>

---

##### `resetDeltaHealthPolicy` <a name="resetDeltaHealthPolicy" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resetDeltaHealthPolicy"></a>

```typescript
public resetDeltaHealthPolicy(): void
```

##### `resetForceRestartEnabled` <a name="resetForceRestartEnabled" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resetForceRestartEnabled"></a>

```typescript
public resetForceRestartEnabled(): void
```

##### `resetHealthCheckRetryTimeout` <a name="resetHealthCheckRetryTimeout" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resetHealthCheckRetryTimeout"></a>

```typescript
public resetHealthCheckRetryTimeout(): void
```

##### `resetHealthCheckStableDuration` <a name="resetHealthCheckStableDuration" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resetHealthCheckStableDuration"></a>

```typescript
public resetHealthCheckStableDuration(): void
```

##### `resetHealthCheckWaitDuration` <a name="resetHealthCheckWaitDuration" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resetHealthCheckWaitDuration"></a>

```typescript
public resetHealthCheckWaitDuration(): void
```

##### `resetHealthPolicy` <a name="resetHealthPolicy" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resetHealthPolicy"></a>

```typescript
public resetHealthPolicy(): void
```

##### `resetUpgradeDomainTimeout` <a name="resetUpgradeDomainTimeout" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resetUpgradeDomainTimeout"></a>

```typescript
public resetUpgradeDomainTimeout(): void
```

##### `resetUpgradeReplicaSetCheckTimeout` <a name="resetUpgradeReplicaSetCheckTimeout" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resetUpgradeReplicaSetCheckTimeout"></a>

```typescript
public resetUpgradeReplicaSetCheckTimeout(): void
```

##### `resetUpgradeTimeout` <a name="resetUpgradeTimeout" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resetUpgradeTimeout"></a>

```typescript
public resetUpgradeTimeout(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.deltaHealthPolicy">deltaHealthPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference">ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.healthPolicy">healthPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference">ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.deltaHealthPolicyInput">deltaHealthPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicy">ServiceFabricClusterUpgradePolicyDeltaHealthPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.forceRestartEnabledInput">forceRestartEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.healthCheckRetryTimeoutInput">healthCheckRetryTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.healthCheckStableDurationInput">healthCheckStableDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.healthCheckWaitDurationInput">healthCheckWaitDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.healthPolicyInput">healthPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicy">ServiceFabricClusterUpgradePolicyHealthPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.upgradeDomainTimeoutInput">upgradeDomainTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.upgradeReplicaSetCheckTimeoutInput">upgradeReplicaSetCheckTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.upgradeTimeoutInput">upgradeTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.forceRestartEnabled">forceRestartEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.healthCheckRetryTimeout">healthCheckRetryTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.healthCheckStableDuration">healthCheckStableDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.healthCheckWaitDuration">healthCheckWaitDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.upgradeDomainTimeout">upgradeDomainTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.upgradeReplicaSetCheckTimeout">upgradeReplicaSetCheckTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.upgradeTimeout">upgradeTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy">ServiceFabricClusterUpgradePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deltaHealthPolicy`<sup>Required</sup> <a name="deltaHealthPolicy" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.deltaHealthPolicy"></a>

```typescript
public readonly deltaHealthPolicy: ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference">ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference</a>

---

##### `healthPolicy`<sup>Required</sup> <a name="healthPolicy" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.healthPolicy"></a>

```typescript
public readonly healthPolicy: ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference">ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference</a>

---

##### `deltaHealthPolicyInput`<sup>Optional</sup> <a name="deltaHealthPolicyInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.deltaHealthPolicyInput"></a>

```typescript
public readonly deltaHealthPolicyInput: ServiceFabricClusterUpgradePolicyDeltaHealthPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicy">ServiceFabricClusterUpgradePolicyDeltaHealthPolicy</a>

---

##### `forceRestartEnabledInput`<sup>Optional</sup> <a name="forceRestartEnabledInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.forceRestartEnabledInput"></a>

```typescript
public readonly forceRestartEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `healthCheckRetryTimeoutInput`<sup>Optional</sup> <a name="healthCheckRetryTimeoutInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.healthCheckRetryTimeoutInput"></a>

```typescript
public readonly healthCheckRetryTimeoutInput: string;
```

- *Type:* string

---

##### `healthCheckStableDurationInput`<sup>Optional</sup> <a name="healthCheckStableDurationInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.healthCheckStableDurationInput"></a>

```typescript
public readonly healthCheckStableDurationInput: string;
```

- *Type:* string

---

##### `healthCheckWaitDurationInput`<sup>Optional</sup> <a name="healthCheckWaitDurationInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.healthCheckWaitDurationInput"></a>

```typescript
public readonly healthCheckWaitDurationInput: string;
```

- *Type:* string

---

##### `healthPolicyInput`<sup>Optional</sup> <a name="healthPolicyInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.healthPolicyInput"></a>

```typescript
public readonly healthPolicyInput: ServiceFabricClusterUpgradePolicyHealthPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicy">ServiceFabricClusterUpgradePolicyHealthPolicy</a>

---

##### `upgradeDomainTimeoutInput`<sup>Optional</sup> <a name="upgradeDomainTimeoutInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.upgradeDomainTimeoutInput"></a>

```typescript
public readonly upgradeDomainTimeoutInput: string;
```

- *Type:* string

---

##### `upgradeReplicaSetCheckTimeoutInput`<sup>Optional</sup> <a name="upgradeReplicaSetCheckTimeoutInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.upgradeReplicaSetCheckTimeoutInput"></a>

```typescript
public readonly upgradeReplicaSetCheckTimeoutInput: string;
```

- *Type:* string

---

##### `upgradeTimeoutInput`<sup>Optional</sup> <a name="upgradeTimeoutInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.upgradeTimeoutInput"></a>

```typescript
public readonly upgradeTimeoutInput: string;
```

- *Type:* string

---

##### `forceRestartEnabled`<sup>Required</sup> <a name="forceRestartEnabled" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.forceRestartEnabled"></a>

```typescript
public readonly forceRestartEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `healthCheckRetryTimeout`<sup>Required</sup> <a name="healthCheckRetryTimeout" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.healthCheckRetryTimeout"></a>

```typescript
public readonly healthCheckRetryTimeout: string;
```

- *Type:* string

---

##### `healthCheckStableDuration`<sup>Required</sup> <a name="healthCheckStableDuration" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.healthCheckStableDuration"></a>

```typescript
public readonly healthCheckStableDuration: string;
```

- *Type:* string

---

##### `healthCheckWaitDuration`<sup>Required</sup> <a name="healthCheckWaitDuration" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.healthCheckWaitDuration"></a>

```typescript
public readonly healthCheckWaitDuration: string;
```

- *Type:* string

---

##### `upgradeDomainTimeout`<sup>Required</sup> <a name="upgradeDomainTimeout" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.upgradeDomainTimeout"></a>

```typescript
public readonly upgradeDomainTimeout: string;
```

- *Type:* string

---

##### `upgradeReplicaSetCheckTimeout`<sup>Required</sup> <a name="upgradeReplicaSetCheckTimeout" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.upgradeReplicaSetCheckTimeout"></a>

```typescript
public readonly upgradeReplicaSetCheckTimeout: string;
```

- *Type:* string

---

##### `upgradeTimeout`<sup>Required</sup> <a name="upgradeTimeout" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.upgradeTimeout"></a>

```typescript
public readonly upgradeTimeout: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceFabricClusterUpgradePolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy">ServiceFabricClusterUpgradePolicy</a>

---



