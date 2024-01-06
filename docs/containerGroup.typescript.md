# `containerGroup` Submodule <a name="`containerGroup` Submodule" id="@cdktf/provider-azurerm.containerGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerGroup <a name="ContainerGroup" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group azurerm_container_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer"></a>

```typescript
import { containerGroup } from '@cdktf/provider-azurerm'

new containerGroup.ContainerGroup(scope: Construct, id: string, config: ContainerGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig">ContainerGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig">ContainerGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.putContainer">putContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.putDiagnostics">putDiagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.putDnsConfig">putDnsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.putExposedPort">putExposedPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.putImageRegistryCredential">putImageRegistryCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.putInitContainer">putInitContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetDiagnostics">resetDiagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetDnsConfig">resetDnsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetDnsNameLabel">resetDnsNameLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetDnsNameLabelReusePolicy">resetDnsNameLabelReusePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetExposedPort">resetExposedPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetImageRegistryCredential">resetImageRegistryCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetInitContainer">resetInitContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetIpAddressType">resetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetKeyVaultKeyId">resetKeyVaultKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetKeyVaultUserAssignedIdentityId">resetKeyVaultUserAssignedIdentityId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetNetworkProfileId">resetNetworkProfileId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetRestartPolicy">resetRestartPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetSku">resetSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetZones">resetZones</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContainer` <a name="putContainer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putContainer"></a>

```typescript
public putContainer(value: IResolvable | ContainerGroupContainer[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putContainer.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer">ContainerGroupContainer</a>[]

---

##### `putDiagnostics` <a name="putDiagnostics" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putDiagnostics"></a>

```typescript
public putDiagnostics(value: ContainerGroupDiagnostics): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putDiagnostics.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnostics">ContainerGroupDiagnostics</a>

---

##### `putDnsConfig` <a name="putDnsConfig" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putDnsConfig"></a>

```typescript
public putDnsConfig(value: ContainerGroupDnsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putDnsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig">ContainerGroupDnsConfig</a>

---

##### `putExposedPort` <a name="putExposedPort" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putExposedPort"></a>

```typescript
public putExposedPort(value: IResolvable | ContainerGroupExposedPort[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putExposedPort.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort">ContainerGroupExposedPort</a>[]

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putIdentity"></a>

```typescript
public putIdentity(value: ContainerGroupIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentity">ContainerGroupIdentity</a>

---

##### `putImageRegistryCredential` <a name="putImageRegistryCredential" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putImageRegistryCredential"></a>

```typescript
public putImageRegistryCredential(value: IResolvable | ContainerGroupImageRegistryCredential[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putImageRegistryCredential.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential">ContainerGroupImageRegistryCredential</a>[]

---

##### `putInitContainer` <a name="putInitContainer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putInitContainer"></a>

```typescript
public putInitContainer(value: IResolvable | ContainerGroupInitContainer[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putInitContainer.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer">ContainerGroupInitContainer</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: ContainerGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts">ContainerGroupTimeouts</a>

---

##### `resetDiagnostics` <a name="resetDiagnostics" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetDiagnostics"></a>

```typescript
public resetDiagnostics(): void
```

##### `resetDnsConfig` <a name="resetDnsConfig" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetDnsConfig"></a>

```typescript
public resetDnsConfig(): void
```

##### `resetDnsNameLabel` <a name="resetDnsNameLabel" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetDnsNameLabel"></a>

```typescript
public resetDnsNameLabel(): void
```

##### `resetDnsNameLabelReusePolicy` <a name="resetDnsNameLabelReusePolicy" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetDnsNameLabelReusePolicy"></a>

```typescript
public resetDnsNameLabelReusePolicy(): void
```

##### `resetExposedPort` <a name="resetExposedPort" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetExposedPort"></a>

```typescript
public resetExposedPort(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetImageRegistryCredential` <a name="resetImageRegistryCredential" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetImageRegistryCredential"></a>

```typescript
public resetImageRegistryCredential(): void
```

##### `resetInitContainer` <a name="resetInitContainer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetInitContainer"></a>

```typescript
public resetInitContainer(): void
```

##### `resetIpAddressType` <a name="resetIpAddressType" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetIpAddressType"></a>

```typescript
public resetIpAddressType(): void
```

##### `resetKeyVaultKeyId` <a name="resetKeyVaultKeyId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetKeyVaultKeyId"></a>

```typescript
public resetKeyVaultKeyId(): void
```

##### `resetKeyVaultUserAssignedIdentityId` <a name="resetKeyVaultUserAssignedIdentityId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetKeyVaultUserAssignedIdentityId"></a>

```typescript
public resetKeyVaultUserAssignedIdentityId(): void
```

##### `resetNetworkProfileId` <a name="resetNetworkProfileId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetNetworkProfileId"></a>

```typescript
public resetNetworkProfileId(): void
```

##### `resetRestartPolicy` <a name="resetRestartPolicy" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetRestartPolicy"></a>

```typescript
public resetRestartPolicy(): void
```

##### `resetSku` <a name="resetSku" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetSku"></a>

```typescript
public resetSku(): void
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetSubnetIds"></a>

```typescript
public resetSubnetIds(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetZones` <a name="resetZones" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetZones"></a>

```typescript
public resetZones(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ContainerGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.isConstruct"></a>

```typescript
import { containerGroup } from '@cdktf/provider-azurerm'

containerGroup.ContainerGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.isTerraformElement"></a>

```typescript
import { containerGroup } from '@cdktf/provider-azurerm'

containerGroup.ContainerGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.isTerraformResource"></a>

```typescript
import { containerGroup } from '@cdktf/provider-azurerm'

containerGroup.ContainerGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.generateConfigForImport"></a>

```typescript
import { containerGroup } from '@cdktf/provider-azurerm'

containerGroup.ContainerGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ContainerGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ContainerGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ContainerGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ContainerGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.container">container</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList">ContainerGroupContainerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.diagnostics">diagnostics</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference">ContainerGroupDiagnosticsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.dnsConfig">dnsConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference">ContainerGroupDnsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.exposedPort">exposedPort</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList">ContainerGroupExposedPortList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.fqdn">fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference">ContainerGroupIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.imageRegistryCredential">imageRegistryCredential</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList">ContainerGroupImageRegistryCredentialList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.initContainer">initContainer</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList">ContainerGroupInitContainerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference">ContainerGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.containerInput">containerInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer">ContainerGroupContainer</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.diagnosticsInput">diagnosticsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnostics">ContainerGroupDiagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.dnsConfigInput">dnsConfigInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig">ContainerGroupDnsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.dnsNameLabelInput">dnsNameLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.dnsNameLabelReusePolicyInput">dnsNameLabelReusePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.exposedPortInput">exposedPortInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort">ContainerGroupExposedPort</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentity">ContainerGroupIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.imageRegistryCredentialInput">imageRegistryCredentialInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential">ContainerGroupImageRegistryCredential</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.initContainerInput">initContainerInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer">ContainerGroupInitContainer</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.ipAddressTypeInput">ipAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.keyVaultKeyIdInput">keyVaultKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.keyVaultUserAssignedIdentityIdInput">keyVaultUserAssignedIdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.networkProfileIdInput">networkProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.osTypeInput">osTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.restartPolicyInput">restartPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.skuInput">skuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts">ContainerGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.zonesInput">zonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.dnsNameLabel">dnsNameLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.dnsNameLabelReusePolicy">dnsNameLabelReusePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.keyVaultUserAssignedIdentityId">keyVaultUserAssignedIdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.networkProfileId">networkProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.osType">osType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.restartPolicy">restartPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.sku">sku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.zones">zones</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.container"></a>

```typescript
public readonly container: ContainerGroupContainerList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList">ContainerGroupContainerList</a>

---

##### `diagnostics`<sup>Required</sup> <a name="diagnostics" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.diagnostics"></a>

```typescript
public readonly diagnostics: ContainerGroupDiagnosticsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference">ContainerGroupDiagnosticsOutputReference</a>

---

##### `dnsConfig`<sup>Required</sup> <a name="dnsConfig" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.dnsConfig"></a>

```typescript
public readonly dnsConfig: ContainerGroupDnsConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference">ContainerGroupDnsConfigOutputReference</a>

---

##### `exposedPort`<sup>Required</sup> <a name="exposedPort" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.exposedPort"></a>

```typescript
public readonly exposedPort: ContainerGroupExposedPortList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList">ContainerGroupExposedPortList</a>

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.identity"></a>

```typescript
public readonly identity: ContainerGroupIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference">ContainerGroupIdentityOutputReference</a>

---

##### `imageRegistryCredential`<sup>Required</sup> <a name="imageRegistryCredential" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.imageRegistryCredential"></a>

```typescript
public readonly imageRegistryCredential: ContainerGroupImageRegistryCredentialList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList">ContainerGroupImageRegistryCredentialList</a>

---

##### `initContainer`<sup>Required</sup> <a name="initContainer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.initContainer"></a>

```typescript
public readonly initContainer: ContainerGroupInitContainerList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList">ContainerGroupInitContainerList</a>

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.timeouts"></a>

```typescript
public readonly timeouts: ContainerGroupTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference">ContainerGroupTimeoutsOutputReference</a>

---

##### `containerInput`<sup>Optional</sup> <a name="containerInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.containerInput"></a>

```typescript
public readonly containerInput: IResolvable | ContainerGroupContainer[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer">ContainerGroupContainer</a>[]

---

##### `diagnosticsInput`<sup>Optional</sup> <a name="diagnosticsInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.diagnosticsInput"></a>

```typescript
public readonly diagnosticsInput: ContainerGroupDiagnostics;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnostics">ContainerGroupDiagnostics</a>

---

##### `dnsConfigInput`<sup>Optional</sup> <a name="dnsConfigInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.dnsConfigInput"></a>

```typescript
public readonly dnsConfigInput: ContainerGroupDnsConfig;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig">ContainerGroupDnsConfig</a>

---

##### `dnsNameLabelInput`<sup>Optional</sup> <a name="dnsNameLabelInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.dnsNameLabelInput"></a>

```typescript
public readonly dnsNameLabelInput: string;
```

- *Type:* string

---

##### `dnsNameLabelReusePolicyInput`<sup>Optional</sup> <a name="dnsNameLabelReusePolicyInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.dnsNameLabelReusePolicyInput"></a>

```typescript
public readonly dnsNameLabelReusePolicyInput: string;
```

- *Type:* string

---

##### `exposedPortInput`<sup>Optional</sup> <a name="exposedPortInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.exposedPortInput"></a>

```typescript
public readonly exposedPortInput: IResolvable | ContainerGroupExposedPort[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort">ContainerGroupExposedPort</a>[]

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.identityInput"></a>

```typescript
public readonly identityInput: ContainerGroupIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentity">ContainerGroupIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `imageRegistryCredentialInput`<sup>Optional</sup> <a name="imageRegistryCredentialInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.imageRegistryCredentialInput"></a>

```typescript
public readonly imageRegistryCredentialInput: IResolvable | ContainerGroupImageRegistryCredential[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential">ContainerGroupImageRegistryCredential</a>[]

---

##### `initContainerInput`<sup>Optional</sup> <a name="initContainerInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.initContainerInput"></a>

```typescript
public readonly initContainerInput: IResolvable | ContainerGroupInitContainer[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer">ContainerGroupInitContainer</a>[]

---

##### `ipAddressTypeInput`<sup>Optional</sup> <a name="ipAddressTypeInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.ipAddressTypeInput"></a>

```typescript
public readonly ipAddressTypeInput: string;
```

- *Type:* string

---

##### `keyVaultKeyIdInput`<sup>Optional</sup> <a name="keyVaultKeyIdInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.keyVaultKeyIdInput"></a>

```typescript
public readonly keyVaultKeyIdInput: string;
```

- *Type:* string

---

##### `keyVaultUserAssignedIdentityIdInput`<sup>Optional</sup> <a name="keyVaultUserAssignedIdentityIdInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.keyVaultUserAssignedIdentityIdInput"></a>

```typescript
public readonly keyVaultUserAssignedIdentityIdInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkProfileIdInput`<sup>Optional</sup> <a name="networkProfileIdInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.networkProfileIdInput"></a>

```typescript
public readonly networkProfileIdInput: string;
```

- *Type:* string

---

##### `osTypeInput`<sup>Optional</sup> <a name="osTypeInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.osTypeInput"></a>

```typescript
public readonly osTypeInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `restartPolicyInput`<sup>Optional</sup> <a name="restartPolicyInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.restartPolicyInput"></a>

```typescript
public readonly restartPolicyInput: string;
```

- *Type:* string

---

##### `skuInput`<sup>Optional</sup> <a name="skuInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.skuInput"></a>

```typescript
public readonly skuInput: string;
```

- *Type:* string

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ContainerGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts">ContainerGroupTimeouts</a>

---

##### `zonesInput`<sup>Optional</sup> <a name="zonesInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.zonesInput"></a>

```typescript
public readonly zonesInput: string[];
```

- *Type:* string[]

---

##### `dnsNameLabel`<sup>Required</sup> <a name="dnsNameLabel" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.dnsNameLabel"></a>

```typescript
public readonly dnsNameLabel: string;
```

- *Type:* string

---

##### `dnsNameLabelReusePolicy`<sup>Required</sup> <a name="dnsNameLabelReusePolicy" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.dnsNameLabelReusePolicy"></a>

```typescript
public readonly dnsNameLabelReusePolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

---

##### `keyVaultKeyId`<sup>Required</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.keyVaultKeyId"></a>

```typescript
public readonly keyVaultKeyId: string;
```

- *Type:* string

---

##### `keyVaultUserAssignedIdentityId`<sup>Required</sup> <a name="keyVaultUserAssignedIdentityId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.keyVaultUserAssignedIdentityId"></a>

```typescript
public readonly keyVaultUserAssignedIdentityId: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkProfileId`<sup>Required</sup> <a name="networkProfileId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.networkProfileId"></a>

```typescript
public readonly networkProfileId: string;
```

- *Type:* string

---

##### `osType`<sup>Required</sup> <a name="osType" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.osType"></a>

```typescript
public readonly osType: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `restartPolicy`<sup>Required</sup> <a name="restartPolicy" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.restartPolicy"></a>

```typescript
public readonly restartPolicy: string;
```

- *Type:* string

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.sku"></a>

```typescript
public readonly sku: string;
```

- *Type:* string

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.zones"></a>

```typescript
public readonly zones: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerGroupConfig <a name="ContainerGroupConfig" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.Initializer"></a>

```typescript
import { containerGroup } from '@cdktf/provider-azurerm'

const containerGroupConfig: containerGroup.ContainerGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.container">container</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer">ContainerGroupContainer</a>[]</code> | container block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#location ContainerGroup#location}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#name ContainerGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.osType">osType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#os_type ContainerGroup#os_type}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#resource_group_name ContainerGroup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.diagnostics">diagnostics</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnostics">ContainerGroupDiagnostics</a></code> | diagnostics block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.dnsConfig">dnsConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig">ContainerGroupDnsConfig</a></code> | dns_config block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.dnsNameLabel">dnsNameLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#dns_name_label ContainerGroup#dns_name_label}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.dnsNameLabelReusePolicy">dnsNameLabelReusePolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#dns_name_label_reuse_policy ContainerGroup#dns_name_label_reuse_policy}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.exposedPort">exposedPort</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort">ContainerGroupExposedPort</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#exposed_port ContainerGroup#exposed_port}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#id ContainerGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentity">ContainerGroupIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.imageRegistryCredential">imageRegistryCredential</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential">ContainerGroupImageRegistryCredential</a>[]</code> | image_registry_credential block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.initContainer">initContainer</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer">ContainerGroupInitContainer</a>[]</code> | init_container block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#ip_address_type ContainerGroup#ip_address_type}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#key_vault_key_id ContainerGroup#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.keyVaultUserAssignedIdentityId">keyVaultUserAssignedIdentityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#key_vault_user_assigned_identity_id ContainerGroup#key_vault_user_assigned_identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.networkProfileId">networkProfileId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#network_profile_id ContainerGroup#network_profile_id}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.restartPolicy">restartPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#restart_policy ContainerGroup#restart_policy}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.sku">sku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#sku ContainerGroup#sku}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#subnet_ids ContainerGroup#subnet_ids}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#tags ContainerGroup#tags}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts">ContainerGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.zones">zones</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#zones ContainerGroup#zones}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.container"></a>

```typescript
public readonly container: IResolvable | ContainerGroupContainer[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer">ContainerGroupContainer</a>[]

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#container ContainerGroup#container}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#location ContainerGroup#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#name ContainerGroup#name}.

---

##### `osType`<sup>Required</sup> <a name="osType" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.osType"></a>

```typescript
public readonly osType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#os_type ContainerGroup#os_type}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#resource_group_name ContainerGroup#resource_group_name}.

---

##### `diagnostics`<sup>Optional</sup> <a name="diagnostics" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.diagnostics"></a>

```typescript
public readonly diagnostics: ContainerGroupDiagnostics;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnostics">ContainerGroupDiagnostics</a>

diagnostics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#diagnostics ContainerGroup#diagnostics}

---

##### `dnsConfig`<sup>Optional</sup> <a name="dnsConfig" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.dnsConfig"></a>

```typescript
public readonly dnsConfig: ContainerGroupDnsConfig;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig">ContainerGroupDnsConfig</a>

dns_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#dns_config ContainerGroup#dns_config}

---

##### `dnsNameLabel`<sup>Optional</sup> <a name="dnsNameLabel" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.dnsNameLabel"></a>

```typescript
public readonly dnsNameLabel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#dns_name_label ContainerGroup#dns_name_label}.

---

##### `dnsNameLabelReusePolicy`<sup>Optional</sup> <a name="dnsNameLabelReusePolicy" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.dnsNameLabelReusePolicy"></a>

```typescript
public readonly dnsNameLabelReusePolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#dns_name_label_reuse_policy ContainerGroup#dns_name_label_reuse_policy}.

---

##### `exposedPort`<sup>Optional</sup> <a name="exposedPort" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.exposedPort"></a>

```typescript
public readonly exposedPort: IResolvable | ContainerGroupExposedPort[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort">ContainerGroupExposedPort</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#exposed_port ContainerGroup#exposed_port}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#id ContainerGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.identity"></a>

```typescript
public readonly identity: ContainerGroupIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentity">ContainerGroupIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#identity ContainerGroup#identity}

---

##### `imageRegistryCredential`<sup>Optional</sup> <a name="imageRegistryCredential" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.imageRegistryCredential"></a>

```typescript
public readonly imageRegistryCredential: IResolvable | ContainerGroupImageRegistryCredential[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential">ContainerGroupImageRegistryCredential</a>[]

image_registry_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#image_registry_credential ContainerGroup#image_registry_credential}

---

##### `initContainer`<sup>Optional</sup> <a name="initContainer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.initContainer"></a>

```typescript
public readonly initContainer: IResolvable | ContainerGroupInitContainer[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer">ContainerGroupInitContainer</a>[]

init_container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#init_container ContainerGroup#init_container}

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#ip_address_type ContainerGroup#ip_address_type}.

---

##### `keyVaultKeyId`<sup>Optional</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.keyVaultKeyId"></a>

```typescript
public readonly keyVaultKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#key_vault_key_id ContainerGroup#key_vault_key_id}.

---

##### `keyVaultUserAssignedIdentityId`<sup>Optional</sup> <a name="keyVaultUserAssignedIdentityId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.keyVaultUserAssignedIdentityId"></a>

```typescript
public readonly keyVaultUserAssignedIdentityId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#key_vault_user_assigned_identity_id ContainerGroup#key_vault_user_assigned_identity_id}.

---

##### `networkProfileId`<sup>Optional</sup> <a name="networkProfileId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.networkProfileId"></a>

```typescript
public readonly networkProfileId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#network_profile_id ContainerGroup#network_profile_id}.

---

##### `restartPolicy`<sup>Optional</sup> <a name="restartPolicy" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.restartPolicy"></a>

```typescript
public readonly restartPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#restart_policy ContainerGroup#restart_policy}.

---

##### `sku`<sup>Optional</sup> <a name="sku" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.sku"></a>

```typescript
public readonly sku: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#sku ContainerGroup#sku}.

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#subnet_ids ContainerGroup#subnet_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#tags ContainerGroup#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ContainerGroupTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts">ContainerGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#timeouts ContainerGroup#timeouts}

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.zones"></a>

```typescript
public readonly zones: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#zones ContainerGroup#zones}.

---

### ContainerGroupContainer <a name="ContainerGroupContainer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.Initializer"></a>

```typescript
import { containerGroup } from '@cdktf/provider-azurerm'

const containerGroupContainer: containerGroup.ContainerGroupContainer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.cpu">cpu</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#cpu ContainerGroup#cpu}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.image">image</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#image ContainerGroup#image}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.memory">memory</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#memory ContainerGroup#memory}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#name ContainerGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.commands">commands</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#commands ContainerGroup#commands}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.cpuLimit">cpuLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#cpu_limit ContainerGroup#cpu_limit}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.environmentVariables">environmentVariables</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#environment_variables ContainerGroup#environment_variables}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.gpu">gpu</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpu">ContainerGroupContainerGpu</a></code> | gpu block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.gpuLimit">gpuLimit</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimit">ContainerGroupContainerGpuLimit</a></code> | gpu_limit block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.livenessProbe">livenessProbe</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe">ContainerGroupContainerLivenessProbe</a></code> | liveness_probe block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.memoryLimit">memoryLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#memory_limit ContainerGroup#memory_limit}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.ports">ports</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPorts">ContainerGroupContainerPorts</a>[]</code> | ports block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.readinessProbe">readinessProbe</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe">ContainerGroupContainerReadinessProbe</a></code> | readiness_probe block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.secureEnvironmentVariables">secureEnvironmentVariables</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#secure_environment_variables ContainerGroup#secure_environment_variables}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.security">security</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurity">ContainerGroupContainerSecurity</a>[]</code> | security block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.volume">volume</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume">ContainerGroupContainerVolume</a>[]</code> | volume block. |

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.cpu"></a>

```typescript
public readonly cpu: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#cpu ContainerGroup#cpu}.

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#image ContainerGroup#image}.

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.memory"></a>

```typescript
public readonly memory: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#memory ContainerGroup#memory}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#name ContainerGroup#name}.

---

##### `commands`<sup>Optional</sup> <a name="commands" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.commands"></a>

```typescript
public readonly commands: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#commands ContainerGroup#commands}.

---

##### `cpuLimit`<sup>Optional</sup> <a name="cpuLimit" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.cpuLimit"></a>

```typescript
public readonly cpuLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#cpu_limit ContainerGroup#cpu_limit}.

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#environment_variables ContainerGroup#environment_variables}.

---

##### `gpu`<sup>Optional</sup> <a name="gpu" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.gpu"></a>

```typescript
public readonly gpu: ContainerGroupContainerGpu;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpu">ContainerGroupContainerGpu</a>

gpu block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#gpu ContainerGroup#gpu}

---

##### `gpuLimit`<sup>Optional</sup> <a name="gpuLimit" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.gpuLimit"></a>

```typescript
public readonly gpuLimit: ContainerGroupContainerGpuLimit;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimit">ContainerGroupContainerGpuLimit</a>

gpu_limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#gpu_limit ContainerGroup#gpu_limit}

---

##### `livenessProbe`<sup>Optional</sup> <a name="livenessProbe" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.livenessProbe"></a>

```typescript
public readonly livenessProbe: ContainerGroupContainerLivenessProbe;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe">ContainerGroupContainerLivenessProbe</a>

liveness_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#liveness_probe ContainerGroup#liveness_probe}

---

##### `memoryLimit`<sup>Optional</sup> <a name="memoryLimit" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.memoryLimit"></a>

```typescript
public readonly memoryLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#memory_limit ContainerGroup#memory_limit}.

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.ports"></a>

```typescript
public readonly ports: IResolvable | ContainerGroupContainerPorts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPorts">ContainerGroupContainerPorts</a>[]

ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#ports ContainerGroup#ports}

---

##### `readinessProbe`<sup>Optional</sup> <a name="readinessProbe" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.readinessProbe"></a>

```typescript
public readonly readinessProbe: ContainerGroupContainerReadinessProbe;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe">ContainerGroupContainerReadinessProbe</a>

readiness_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#readiness_probe ContainerGroup#readiness_probe}

---

##### `secureEnvironmentVariables`<sup>Optional</sup> <a name="secureEnvironmentVariables" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.secureEnvironmentVariables"></a>

```typescript
public readonly secureEnvironmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#secure_environment_variables ContainerGroup#secure_environment_variables}.

---

##### `security`<sup>Optional</sup> <a name="security" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.security"></a>

```typescript
public readonly security: IResolvable | ContainerGroupContainerSecurity[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurity">ContainerGroupContainerSecurity</a>[]

security block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#security ContainerGroup#security}

---

##### `volume`<sup>Optional</sup> <a name="volume" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.volume"></a>

```typescript
public readonly volume: IResolvable | ContainerGroupContainerVolume[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume">ContainerGroupContainerVolume</a>[]

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#volume ContainerGroup#volume}

---

### ContainerGroupContainerGpu <a name="ContainerGroupContainerGpu" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpu"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpu.Initializer"></a>

```typescript
import { containerGroup } from '@cdktf/provider-azurerm'

const containerGroupContainerGpu: containerGroup.ContainerGroupContainerGpu = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpu.property.count">count</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#count ContainerGroup#count}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpu.property.sku">sku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#sku ContainerGroup#sku}. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpu.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#count ContainerGroup#count}.

---

##### `sku`<sup>Optional</sup> <a name="sku" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpu.property.sku"></a>

```typescript
public readonly sku: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#sku ContainerGroup#sku}.

---

### ContainerGroupContainerGpuLimit <a name="ContainerGroupContainerGpuLimit" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimit.Initializer"></a>

```typescript
import { containerGroup } from '@cdktf/provider-azurerm'

const containerGroupContainerGpuLimit: containerGroup.ContainerGroupContainerGpuLimit = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimit.property.count">count</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#count ContainerGroup#count}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimit.property.sku">sku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#sku ContainerGroup#sku}. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimit.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#count ContainerGroup#count}.

---

##### `sku`<sup>Optional</sup> <a name="sku" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimit.property.sku"></a>

```typescript
public readonly sku: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#sku ContainerGroup#sku}.

---

### ContainerGroupContainerLivenessProbe <a name="ContainerGroupContainerLivenessProbe" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe.Initializer"></a>

```typescript
import { containerGroup } from '@cdktf/provider-azurerm'

const containerGroupContainerLivenessProbe: containerGroup.ContainerGroupContainerLivenessProbe = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe.property.exec">exec</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#exec ContainerGroup#exec}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe.property.failureThreshold">failureThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#failure_threshold ContainerGroup#failure_threshold}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe.property.httpGet">httpGet</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet">ContainerGroupContainerLivenessProbeHttpGet</a>[]</code> | http_get block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe.property.initialDelaySeconds">initialDelaySeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#initial_delay_seconds ContainerGroup#initial_delay_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe.property.periodSeconds">periodSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#period_seconds ContainerGroup#period_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe.property.successThreshold">successThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#success_threshold ContainerGroup#success_threshold}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#timeout_seconds ContainerGroup#timeout_seconds}. |

---

##### `exec`<sup>Optional</sup> <a name="exec" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe.property.exec"></a>

```typescript
public readonly exec: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#exec ContainerGroup#exec}.

---

##### `failureThreshold`<sup>Optional</sup> <a name="failureThreshold" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe.property.failureThreshold"></a>

```typescript
public readonly failureThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#failure_threshold ContainerGroup#failure_threshold}.

---

##### `httpGet`<sup>Optional</sup> <a name="httpGet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe.property.httpGet"></a>

```typescript
public readonly httpGet: IResolvable | ContainerGroupContainerLivenessProbeHttpGet[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet">ContainerGroupContainerLivenessProbeHttpGet</a>[]

http_get block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#http_get ContainerGroup#http_get}

---

##### `initialDelaySeconds`<sup>Optional</sup> <a name="initialDelaySeconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe.property.initialDelaySeconds"></a>

```typescript
public readonly initialDelaySeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#initial_delay_seconds ContainerGroup#initial_delay_seconds}.

---

##### `periodSeconds`<sup>Optional</sup> <a name="periodSeconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe.property.periodSeconds"></a>

```typescript
public readonly periodSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#period_seconds ContainerGroup#period_seconds}.

---

##### `successThreshold`<sup>Optional</sup> <a name="successThreshold" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe.property.successThreshold"></a>

```typescript
public readonly successThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#success_threshold ContainerGroup#success_threshold}.

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#timeout_seconds ContainerGroup#timeout_seconds}.

---

### ContainerGroupContainerLivenessProbeHttpGet <a name="ContainerGroupContainerLivenessProbeHttpGet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet.Initializer"></a>

```typescript
import { containerGroup } from '@cdktf/provider-azurerm'

const containerGroupContainerLivenessProbeHttpGet: containerGroup.ContainerGroupContainerLivenessProbeHttpGet = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet.property.httpHeaders">httpHeaders</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#http_headers ContainerGroup#http_headers}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#path ContainerGroup#path}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#port ContainerGroup#port}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet.property.scheme">scheme</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#scheme ContainerGroup#scheme}. |

---

##### `httpHeaders`<sup>Optional</sup> <a name="httpHeaders" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet.property.httpHeaders"></a>

```typescript
public readonly httpHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#http_headers ContainerGroup#http_headers}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#path ContainerGroup#path}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#port ContainerGroup#port}.

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#scheme ContainerGroup#scheme}.

---

### ContainerGroupContainerPorts <a name="ContainerGroupContainerPorts" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPorts.Initializer"></a>

```typescript
import { containerGroup } from '@cdktf/provider-azurerm'

const containerGroupContainerPorts: containerGroup.ContainerGroupContainerPorts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPorts.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#port ContainerGroup#port}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPorts.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#protocol ContainerGroup#protocol}. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPorts.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#port ContainerGroup#port}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPorts.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#protocol ContainerGroup#protocol}.

---

### ContainerGroupContainerReadinessProbe <a name="ContainerGroupContainerReadinessProbe" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe.Initializer"></a>

```typescript
import { containerGroup } from '@cdktf/provider-azurerm'

const containerGroupContainerReadinessProbe: containerGroup.ContainerGroupContainerReadinessProbe = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe.property.exec">exec</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#exec ContainerGroup#exec}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe.property.failureThreshold">failureThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#failure_threshold ContainerGroup#failure_threshold}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe.property.httpGet">httpGet</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet">ContainerGroupContainerReadinessProbeHttpGet</a>[]</code> | http_get block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe.property.initialDelaySeconds">initialDelaySeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#initial_delay_seconds ContainerGroup#initial_delay_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe.property.periodSeconds">periodSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#period_seconds ContainerGroup#period_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe.property.successThreshold">successThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#success_threshold ContainerGroup#success_threshold}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#timeout_seconds ContainerGroup#timeout_seconds}. |

---

##### `exec`<sup>Optional</sup> <a name="exec" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe.property.exec"></a>

```typescript
public readonly exec: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#exec ContainerGroup#exec}.

---

##### `failureThreshold`<sup>Optional</sup> <a name="failureThreshold" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe.property.failureThreshold"></a>

```typescript
public readonly failureThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#failure_threshold ContainerGroup#failure_threshold}.

---

##### `httpGet`<sup>Optional</sup> <a name="httpGet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe.property.httpGet"></a>

```typescript
public readonly httpGet: IResolvable | ContainerGroupContainerReadinessProbeHttpGet[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet">ContainerGroupContainerReadinessProbeHttpGet</a>[]

http_get block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#http_get ContainerGroup#http_get}

---

##### `initialDelaySeconds`<sup>Optional</sup> <a name="initialDelaySeconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe.property.initialDelaySeconds"></a>

```typescript
public readonly initialDelaySeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#initial_delay_seconds ContainerGroup#initial_delay_seconds}.

---

##### `periodSeconds`<sup>Optional</sup> <a name="periodSeconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe.property.periodSeconds"></a>

```typescript
public readonly periodSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#period_seconds ContainerGroup#period_seconds}.

---

##### `successThreshold`<sup>Optional</sup> <a name="successThreshold" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe.property.successThreshold"></a>

```typescript
public readonly successThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#success_threshold ContainerGroup#success_threshold}.

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#timeout_seconds ContainerGroup#timeout_seconds}.

---

### ContainerGroupContainerReadinessProbeHttpGet <a name="ContainerGroupContainerReadinessProbeHttpGet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet.Initializer"></a>

```typescript
import { containerGroup } from '@cdktf/provider-azurerm'

const containerGroupContainerReadinessProbeHttpGet: containerGroup.ContainerGroupContainerReadinessProbeHttpGet = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet.property.httpHeaders">httpHeaders</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#http_headers ContainerGroup#http_headers}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#path ContainerGroup#path}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#port ContainerGroup#port}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet.property.scheme">scheme</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#scheme ContainerGroup#scheme}. |

---

##### `httpHeaders`<sup>Optional</sup> <a name="httpHeaders" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet.property.httpHeaders"></a>

```typescript
public readonly httpHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#http_headers ContainerGroup#http_headers}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#path ContainerGroup#path}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#port ContainerGroup#port}.

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#scheme ContainerGroup#scheme}.

---

### ContainerGroupContainerSecurity <a name="ContainerGroupContainerSecurity" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurity.Initializer"></a>

```typescript
import { containerGroup } from '@cdktf/provider-azurerm'

const containerGroupContainerSecurity: containerGroup.ContainerGroupContainerSecurity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurity.property.privilegeEnabled">privilegeEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#privilege_enabled ContainerGroup#privilege_enabled}. |

---

##### `privilegeEnabled`<sup>Required</sup> <a name="privilegeEnabled" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurity.property.privilegeEnabled"></a>

```typescript
public readonly privilegeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#privilege_enabled ContainerGroup#privilege_enabled}.

---

### ContainerGroupContainerVolume <a name="ContainerGroupContainerVolume" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.Initializer"></a>

```typescript
import { containerGroup } from '@cdktf/provider-azurerm'

const containerGroupContainerVolume: containerGroup.ContainerGroupContainerVolume = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.mountPath">mountPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#mount_path ContainerGroup#mount_path}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#name ContainerGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.emptyDir">emptyDir</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#empty_dir ContainerGroup#empty_dir}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.gitRepo">gitRepo</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepo">ContainerGroupContainerVolumeGitRepo</a></code> | git_repo block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#read_only ContainerGroup#read_only}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.secret">secret</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#secret ContainerGroup#secret}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.shareName">shareName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#share_name ContainerGroup#share_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.storageAccountKey">storageAccountKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#storage_account_key ContainerGroup#storage_account_key}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.storageAccountName">storageAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#storage_account_name ContainerGroup#storage_account_name}. |

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#mount_path ContainerGroup#mount_path}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#name ContainerGroup#name}.

---

##### `emptyDir`<sup>Optional</sup> <a name="emptyDir" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.emptyDir"></a>

```typescript
public readonly emptyDir: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#empty_dir ContainerGroup#empty_dir}.

---

##### `gitRepo`<sup>Optional</sup> <a name="gitRepo" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.gitRepo"></a>

```typescript
public readonly gitRepo: ContainerGroupContainerVolumeGitRepo;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepo">ContainerGroupContainerVolumeGitRepo</a>

git_repo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#git_repo ContainerGroup#git_repo}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#read_only ContainerGroup#read_only}.

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.secret"></a>

```typescript
public readonly secret: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#secret ContainerGroup#secret}.

---

##### `shareName`<sup>Optional</sup> <a name="shareName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.shareName"></a>

```typescript
public readonly shareName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#share_name ContainerGroup#share_name}.

---

##### `storageAccountKey`<sup>Optional</sup> <a name="storageAccountKey" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.storageAccountKey"></a>

```typescript
public readonly storageAccountKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#storage_account_key ContainerGroup#storage_account_key}.

---

##### `storageAccountName`<sup>Optional</sup> <a name="storageAccountName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.storageAccountName"></a>

```typescript
public readonly storageAccountName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#storage_account_name ContainerGroup#storage_account_name}.

---

### ContainerGroupContainerVolumeGitRepo <a name="ContainerGroupContainerVolumeGitRepo" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepo.Initializer"></a>

```typescript
import { containerGroup } from '@cdktf/provider-azurerm'

const containerGroupContainerVolumeGitRepo: containerGroup.ContainerGroupContainerVolumeGitRepo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepo.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#url ContainerGroup#url}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepo.property.directory">directory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#directory ContainerGroup#directory}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepo.property.revision">revision</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#revision ContainerGroup#revision}. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepo.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#url ContainerGroup#url}.

---

##### `directory`<sup>Optional</sup> <a name="directory" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepo.property.directory"></a>

```typescript
public readonly directory: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#directory ContainerGroup#directory}.

---

##### `revision`<sup>Optional</sup> <a name="revision" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepo.property.revision"></a>

```typescript
public readonly revision: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#revision ContainerGroup#revision}.

---

### ContainerGroupDiagnostics <a name="ContainerGroupDiagnostics" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnostics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnostics.Initializer"></a>

```typescript
import { containerGroup } from '@cdktf/provider-azurerm'

const containerGroupDiagnostics: containerGroup.ContainerGroupDiagnostics = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnostics.property.logAnalytics">logAnalytics</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics">ContainerGroupDiagnosticsLogAnalytics</a></code> | log_analytics block. |

---

##### `logAnalytics`<sup>Required</sup> <a name="logAnalytics" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnostics.property.logAnalytics"></a>

```typescript
public readonly logAnalytics: ContainerGroupDiagnosticsLogAnalytics;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics">ContainerGroupDiagnosticsLogAnalytics</a>

log_analytics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#log_analytics ContainerGroup#log_analytics}

---

### ContainerGroupDiagnosticsLogAnalytics <a name="ContainerGroupDiagnosticsLogAnalytics" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics.Initializer"></a>

```typescript
import { containerGroup } from '@cdktf/provider-azurerm'

const containerGroupDiagnosticsLogAnalytics: containerGroup.ContainerGroupDiagnosticsLogAnalytics = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#workspace_id ContainerGroup#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics.property.workspaceKey">workspaceKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#workspace_key ContainerGroup#workspace_key}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics.property.logType">logType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#log_type ContainerGroup#log_type}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#metadata ContainerGroup#metadata}. |

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#workspace_id ContainerGroup#workspace_id}.

---

##### `workspaceKey`<sup>Required</sup> <a name="workspaceKey" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics.property.workspaceKey"></a>

```typescript
public readonly workspaceKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#workspace_key ContainerGroup#workspace_key}.

---

##### `logType`<sup>Optional</sup> <a name="logType" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics.property.logType"></a>

```typescript
public readonly logType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#log_type ContainerGroup#log_type}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#metadata ContainerGroup#metadata}.

---

### ContainerGroupDnsConfig <a name="ContainerGroupDnsConfig" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig.Initializer"></a>

```typescript
import { containerGroup } from '@cdktf/provider-azurerm'

const containerGroupDnsConfig: containerGroup.ContainerGroupDnsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig.property.nameservers">nameservers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#nameservers ContainerGroup#nameservers}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig.property.options">options</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#options ContainerGroup#options}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig.property.searchDomains">searchDomains</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#search_domains ContainerGroup#search_domains}. |

---

##### `nameservers`<sup>Required</sup> <a name="nameservers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig.property.nameservers"></a>

```typescript
public readonly nameservers: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#nameservers ContainerGroup#nameservers}.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig.property.options"></a>

```typescript
public readonly options: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#options ContainerGroup#options}.

---

##### `searchDomains`<sup>Optional</sup> <a name="searchDomains" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig.property.searchDomains"></a>

```typescript
public readonly searchDomains: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#search_domains ContainerGroup#search_domains}.

---

### ContainerGroupExposedPort <a name="ContainerGroupExposedPort" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort.Initializer"></a>

```typescript
import { containerGroup } from '@cdktf/provider-azurerm'

const containerGroupExposedPort: containerGroup.ContainerGroupExposedPort = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#port ContainerGroup#port}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#protocol ContainerGroup#protocol}. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#port ContainerGroup#port}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#protocol ContainerGroup#protocol}.

---

### ContainerGroupIdentity <a name="ContainerGroupIdentity" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentity.Initializer"></a>

```typescript
import { containerGroup } from '@cdktf/provider-azurerm'

const containerGroupIdentity: containerGroup.ContainerGroupIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#type ContainerGroup#type}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentity.property.identityIds">identityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#identity_ids ContainerGroup#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#type ContainerGroup#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentity.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#identity_ids ContainerGroup#identity_ids}.

---

### ContainerGroupImageRegistryCredential <a name="ContainerGroupImageRegistryCredential" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential.Initializer"></a>

```typescript
import { containerGroup } from '@cdktf/provider-azurerm'

const containerGroupImageRegistryCredential: containerGroup.ContainerGroupImageRegistryCredential = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential.property.server">server</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#server ContainerGroup#server}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#password ContainerGroup#password}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential.property.userAssignedIdentityId">userAssignedIdentityId</a></code> | <code>string</code> | The User Assigned Identity to use for Container Registry access. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#username ContainerGroup#username}. |

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential.property.server"></a>

```typescript
public readonly server: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#server ContainerGroup#server}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#password ContainerGroup#password}.

---

##### `userAssignedIdentityId`<sup>Optional</sup> <a name="userAssignedIdentityId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential.property.userAssignedIdentityId"></a>

```typescript
public readonly userAssignedIdentityId: string;
```

- *Type:* string

The User Assigned Identity to use for Container Registry access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#user_assigned_identity_id ContainerGroup#user_assigned_identity_id}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#username ContainerGroup#username}.

---

### ContainerGroupInitContainer <a name="ContainerGroupInitContainer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer.Initializer"></a>

```typescript
import { containerGroup } from '@cdktf/provider-azurerm'

const containerGroupInitContainer: containerGroup.ContainerGroupInitContainer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer.property.image">image</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#image ContainerGroup#image}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#name ContainerGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer.property.commands">commands</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#commands ContainerGroup#commands}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer.property.environmentVariables">environmentVariables</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#environment_variables ContainerGroup#environment_variables}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer.property.secureEnvironmentVariables">secureEnvironmentVariables</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#secure_environment_variables ContainerGroup#secure_environment_variables}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer.property.security">security</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurity">ContainerGroupInitContainerSecurity</a>[]</code> | security block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer.property.volume">volume</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume">ContainerGroupInitContainerVolume</a>[]</code> | volume block. |

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#image ContainerGroup#image}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#name ContainerGroup#name}.

---

##### `commands`<sup>Optional</sup> <a name="commands" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer.property.commands"></a>

```typescript
public readonly commands: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#commands ContainerGroup#commands}.

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#environment_variables ContainerGroup#environment_variables}.

---

##### `secureEnvironmentVariables`<sup>Optional</sup> <a name="secureEnvironmentVariables" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer.property.secureEnvironmentVariables"></a>

```typescript
public readonly secureEnvironmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#secure_environment_variables ContainerGroup#secure_environment_variables}.

---

##### `security`<sup>Optional</sup> <a name="security" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer.property.security"></a>

```typescript
public readonly security: IResolvable | ContainerGroupInitContainerSecurity[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurity">ContainerGroupInitContainerSecurity</a>[]

security block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#security ContainerGroup#security}

---

##### `volume`<sup>Optional</sup> <a name="volume" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer.property.volume"></a>

```typescript
public readonly volume: IResolvable | ContainerGroupInitContainerVolume[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume">ContainerGroupInitContainerVolume</a>[]

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#volume ContainerGroup#volume}

---

### ContainerGroupInitContainerSecurity <a name="ContainerGroupInitContainerSecurity" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurity.Initializer"></a>

```typescript
import { containerGroup } from '@cdktf/provider-azurerm'

const containerGroupInitContainerSecurity: containerGroup.ContainerGroupInitContainerSecurity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurity.property.privilegeEnabled">privilegeEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#privilege_enabled ContainerGroup#privilege_enabled}. |

---

##### `privilegeEnabled`<sup>Required</sup> <a name="privilegeEnabled" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurity.property.privilegeEnabled"></a>

```typescript
public readonly privilegeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#privilege_enabled ContainerGroup#privilege_enabled}.

---

### ContainerGroupInitContainerVolume <a name="ContainerGroupInitContainerVolume" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.Initializer"></a>

```typescript
import { containerGroup } from '@cdktf/provider-azurerm'

const containerGroupInitContainerVolume: containerGroup.ContainerGroupInitContainerVolume = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.mountPath">mountPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#mount_path ContainerGroup#mount_path}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#name ContainerGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.emptyDir">emptyDir</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#empty_dir ContainerGroup#empty_dir}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.gitRepo">gitRepo</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepo">ContainerGroupInitContainerVolumeGitRepo</a></code> | git_repo block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#read_only ContainerGroup#read_only}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.secret">secret</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#secret ContainerGroup#secret}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.shareName">shareName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#share_name ContainerGroup#share_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.storageAccountKey">storageAccountKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#storage_account_key ContainerGroup#storage_account_key}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.storageAccountName">storageAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#storage_account_name ContainerGroup#storage_account_name}. |

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#mount_path ContainerGroup#mount_path}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#name ContainerGroup#name}.

---

##### `emptyDir`<sup>Optional</sup> <a name="emptyDir" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.emptyDir"></a>

```typescript
public readonly emptyDir: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#empty_dir ContainerGroup#empty_dir}.

---

##### `gitRepo`<sup>Optional</sup> <a name="gitRepo" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.gitRepo"></a>

```typescript
public readonly gitRepo: ContainerGroupInitContainerVolumeGitRepo;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepo">ContainerGroupInitContainerVolumeGitRepo</a>

git_repo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#git_repo ContainerGroup#git_repo}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#read_only ContainerGroup#read_only}.

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.secret"></a>

```typescript
public readonly secret: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#secret ContainerGroup#secret}.

---

##### `shareName`<sup>Optional</sup> <a name="shareName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.shareName"></a>

```typescript
public readonly shareName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#share_name ContainerGroup#share_name}.

---

##### `storageAccountKey`<sup>Optional</sup> <a name="storageAccountKey" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.storageAccountKey"></a>

```typescript
public readonly storageAccountKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#storage_account_key ContainerGroup#storage_account_key}.

---

##### `storageAccountName`<sup>Optional</sup> <a name="storageAccountName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.storageAccountName"></a>

```typescript
public readonly storageAccountName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#storage_account_name ContainerGroup#storage_account_name}.

---

### ContainerGroupInitContainerVolumeGitRepo <a name="ContainerGroupInitContainerVolumeGitRepo" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepo.Initializer"></a>

```typescript
import { containerGroup } from '@cdktf/provider-azurerm'

const containerGroupInitContainerVolumeGitRepo: containerGroup.ContainerGroupInitContainerVolumeGitRepo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepo.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#url ContainerGroup#url}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepo.property.directory">directory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#directory ContainerGroup#directory}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepo.property.revision">revision</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#revision ContainerGroup#revision}. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepo.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#url ContainerGroup#url}.

---

##### `directory`<sup>Optional</sup> <a name="directory" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepo.property.directory"></a>

```typescript
public readonly directory: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#directory ContainerGroup#directory}.

---

##### `revision`<sup>Optional</sup> <a name="revision" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepo.property.revision"></a>

```typescript
public readonly revision: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#revision ContainerGroup#revision}.

---

### ContainerGroupTimeouts <a name="ContainerGroupTimeouts" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts.Initializer"></a>

```typescript
import { containerGroup } from '@cdktf/provider-azurerm'

const containerGroupTimeouts: containerGroup.ContainerGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#create ContainerGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#delete ContainerGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#read ContainerGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#update ContainerGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#create ContainerGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#delete ContainerGroup#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#read ContainerGroup#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/container_group#update ContainerGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerGroupContainerGpuLimitOutputReference <a name="ContainerGroupContainerGpuLimitOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.Initializer"></a>

```typescript
import { containerGroup } from '@cdktf/provider-azurerm'

new containerGroup.ContainerGroupContainerGpuLimitOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.resetCount">resetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.resetSku">resetSku</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCount` <a name="resetCount" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.resetCount"></a>

```typescript
public resetCount(): void
```

##### `resetSku` <a name="resetSku" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.resetSku"></a>

```typescript
public resetSku(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.property.skuInput">skuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.property.sku">sku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimit">ContainerGroupContainerGpuLimit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `skuInput`<sup>Optional</sup> <a name="skuInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.property.skuInput"></a>

```typescript
public readonly skuInput: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.property.sku"></a>

```typescript
public readonly sku: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerGroupContainerGpuLimit;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimit">ContainerGroupContainerGpuLimit</a>

---


### ContainerGroupContainerGpuOutputReference <a name="ContainerGroupContainerGpuOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.Initializer"></a>

```typescript
import { containerGroup } from '@cdktf/provider-azurerm'

new containerGroup.ContainerGroupContainerGpuOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.resetCount">resetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.resetSku">resetSku</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCount` <a name="resetCount" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.resetCount"></a>

```typescript
public resetCount(): void
```

##### `resetSku` <a name="resetSku" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.resetSku"></a>

```typescript
public resetSku(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.property.skuInput">skuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.property.sku">sku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpu">ContainerGroupContainerGpu</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `skuInput`<sup>Optional</sup> <a name="skuInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.property.skuInput"></a>

```typescript
public readonly skuInput: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.property.sku"></a>

```typescript
public readonly sku: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerGroupContainerGpu;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpu">ContainerGroupContainerGpu</a>

---


### ContainerGroupContainerList <a name="ContainerGroupContainerList" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.Initializer"></a>

```typescript
import { containerGroup } from '@cdktf/provider-azurerm'

new containerGroup.ContainerGroupContainerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.get"></a>

```typescript
public get(index: number): ContainerGroupContainerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer">ContainerGroupContainer</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerGroupContainer[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer">ContainerGroupContainer</a>[]

---


### ContainerGroupContainerLivenessProbeHttpGetList <a name="ContainerGroupContainerLivenessProbeHttpGetList" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.Initializer"></a>

```typescript
import { containerGroup } from '@cdktf/provider-azurerm'

new containerGroup.ContainerGroupContainerLivenessProbeHttpGetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.get"></a>

```typescript
public get(index: number): ContainerGroupContainerLivenessProbeHttpGetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet">ContainerGroupContainerLivenessProbeHttpGet</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerGroupContainerLivenessProbeHttpGet[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet">ContainerGroupContainerLivenessProbeHttpGet</a>[]

---


### ContainerGroupContainerLivenessProbeHttpGetOutputReference <a name="ContainerGroupContainerLivenessProbeHttpGetOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.Initializer"></a>

```typescript
import { containerGroup } from '@cdktf/provider-azurerm'

new containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.resetHttpHeaders">resetHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.resetScheme">resetScheme</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHttpHeaders` <a name="resetHttpHeaders" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.resetHttpHeaders"></a>

```typescript
public resetHttpHeaders(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetScheme` <a name="resetScheme" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.resetScheme"></a>

```typescript
public resetScheme(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.httpHeadersInput">httpHeadersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.schemeInput">schemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.httpHeaders">httpHeaders</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.scheme">scheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet">ContainerGroupContainerLivenessProbeHttpGet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `httpHeadersInput`<sup>Optional</sup> <a name="httpHeadersInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.httpHeadersInput"></a>

```typescript
public readonly httpHeadersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `schemeInput`<sup>Optional</sup> <a name="schemeInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.schemeInput"></a>

```typescript
public readonly schemeInput: string;
```

- *Type:* string

---

##### `httpHeaders`<sup>Required</sup> <a name="httpHeaders" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.httpHeaders"></a>

```typescript
public readonly httpHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerGroupContainerLivenessProbeHttpGet;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet">ContainerGroupContainerLivenessProbeHttpGet</a>

---


### ContainerGroupContainerLivenessProbeOutputReference <a name="ContainerGroupContainerLivenessProbeOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.Initializer"></a>

```typescript
import { containerGroup } from '@cdktf/provider-azurerm'

new containerGroup.ContainerGroupContainerLivenessProbeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.putHttpGet">putHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resetExec">resetExec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resetFailureThreshold">resetFailureThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resetHttpGet">resetHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resetInitialDelaySeconds">resetInitialDelaySeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resetPeriodSeconds">resetPeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resetSuccessThreshold">resetSuccessThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resetTimeoutSeconds">resetTimeoutSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHttpGet` <a name="putHttpGet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.putHttpGet"></a>

```typescript
public putHttpGet(value: IResolvable | ContainerGroupContainerLivenessProbeHttpGet[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.putHttpGet.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet">ContainerGroupContainerLivenessProbeHttpGet</a>[]

---

##### `resetExec` <a name="resetExec" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resetExec"></a>

```typescript
public resetExec(): void
```

##### `resetFailureThreshold` <a name="resetFailureThreshold" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resetFailureThreshold"></a>

```typescript
public resetFailureThreshold(): void
```

##### `resetHttpGet` <a name="resetHttpGet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resetHttpGet"></a>

```typescript
public resetHttpGet(): void
```

##### `resetInitialDelaySeconds` <a name="resetInitialDelaySeconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resetInitialDelaySeconds"></a>

```typescript
public resetInitialDelaySeconds(): void
```

##### `resetPeriodSeconds` <a name="resetPeriodSeconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resetPeriodSeconds"></a>

```typescript
public resetPeriodSeconds(): void
```

##### `resetSuccessThreshold` <a name="resetSuccessThreshold" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resetSuccessThreshold"></a>

```typescript
public resetSuccessThreshold(): void
```

##### `resetTimeoutSeconds` <a name="resetTimeoutSeconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resetTimeoutSeconds"></a>

```typescript
public resetTimeoutSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.httpGet">httpGet</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList">ContainerGroupContainerLivenessProbeHttpGetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.execInput">execInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.failureThresholdInput">failureThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.httpGetInput">httpGetInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet">ContainerGroupContainerLivenessProbeHttpGet</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.initialDelaySecondsInput">initialDelaySecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.periodSecondsInput">periodSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.successThresholdInput">successThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.timeoutSecondsInput">timeoutSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.exec">exec</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.failureThreshold">failureThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.initialDelaySeconds">initialDelaySeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.periodSeconds">periodSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.successThreshold">successThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe">ContainerGroupContainerLivenessProbe</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `httpGet`<sup>Required</sup> <a name="httpGet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.httpGet"></a>

```typescript
public readonly httpGet: ContainerGroupContainerLivenessProbeHttpGetList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList">ContainerGroupContainerLivenessProbeHttpGetList</a>

---

##### `execInput`<sup>Optional</sup> <a name="execInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.execInput"></a>

```typescript
public readonly execInput: string[];
```

- *Type:* string[]

---

##### `failureThresholdInput`<sup>Optional</sup> <a name="failureThresholdInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.failureThresholdInput"></a>

```typescript
public readonly failureThresholdInput: number;
```

- *Type:* number

---

##### `httpGetInput`<sup>Optional</sup> <a name="httpGetInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.httpGetInput"></a>

```typescript
public readonly httpGetInput: IResolvable | ContainerGroupContainerLivenessProbeHttpGet[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet">ContainerGroupContainerLivenessProbeHttpGet</a>[]

---

##### `initialDelaySecondsInput`<sup>Optional</sup> <a name="initialDelaySecondsInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.initialDelaySecondsInput"></a>

```typescript
public readonly initialDelaySecondsInput: number;
```

- *Type:* number

---

##### `periodSecondsInput`<sup>Optional</sup> <a name="periodSecondsInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.periodSecondsInput"></a>

```typescript
public readonly periodSecondsInput: number;
```

- *Type:* number

---

##### `successThresholdInput`<sup>Optional</sup> <a name="successThresholdInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.successThresholdInput"></a>

```typescript
public readonly successThresholdInput: number;
```

- *Type:* number

---

##### `timeoutSecondsInput`<sup>Optional</sup> <a name="timeoutSecondsInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.timeoutSecondsInput"></a>

```typescript
public readonly timeoutSecondsInput: number;
```

- *Type:* number

---

##### `exec`<sup>Required</sup> <a name="exec" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.exec"></a>

```typescript
public readonly exec: string[];
```

- *Type:* string[]

---

##### `failureThreshold`<sup>Required</sup> <a name="failureThreshold" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.failureThreshold"></a>

```typescript
public readonly failureThreshold: number;
```

- *Type:* number

---

##### `initialDelaySeconds`<sup>Required</sup> <a name="initialDelaySeconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.initialDelaySeconds"></a>

```typescript
public readonly initialDelaySeconds: number;
```

- *Type:* number

---

##### `periodSeconds`<sup>Required</sup> <a name="periodSeconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.periodSeconds"></a>

```typescript
public readonly periodSeconds: number;
```

- *Type:* number

---

##### `successThreshold`<sup>Required</sup> <a name="successThreshold" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.successThreshold"></a>

```typescript
public readonly successThreshold: number;
```

- *Type:* number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerGroupContainerLivenessProbe;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe">ContainerGroupContainerLivenessProbe</a>

---


### ContainerGroupContainerOutputReference <a name="ContainerGroupContainerOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.Initializer"></a>

```typescript
import { containerGroup } from '@cdktf/provider-azurerm'

new containerGroup.ContainerGroupContainerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putGpu">putGpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putGpuLimit">putGpuLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putLivenessProbe">putLivenessProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putPorts">putPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putReadinessProbe">putReadinessProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putSecurity">putSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putVolume">putVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetCommands">resetCommands</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetCpuLimit">resetCpuLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetEnvironmentVariables">resetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetGpu">resetGpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetGpuLimit">resetGpuLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetLivenessProbe">resetLivenessProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetMemoryLimit">resetMemoryLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetPorts">resetPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetReadinessProbe">resetReadinessProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetSecureEnvironmentVariables">resetSecureEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetSecurity">resetSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetVolume">resetVolume</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGpu` <a name="putGpu" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putGpu"></a>

```typescript
public putGpu(value: ContainerGroupContainerGpu): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putGpu.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpu">ContainerGroupContainerGpu</a>

---

##### `putGpuLimit` <a name="putGpuLimit" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putGpuLimit"></a>

```typescript
public putGpuLimit(value: ContainerGroupContainerGpuLimit): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putGpuLimit.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimit">ContainerGroupContainerGpuLimit</a>

---

##### `putLivenessProbe` <a name="putLivenessProbe" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putLivenessProbe"></a>

```typescript
public putLivenessProbe(value: ContainerGroupContainerLivenessProbe): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putLivenessProbe.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe">ContainerGroupContainerLivenessProbe</a>

---

##### `putPorts` <a name="putPorts" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putPorts"></a>

```typescript
public putPorts(value: IResolvable | ContainerGroupContainerPorts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putPorts.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPorts">ContainerGroupContainerPorts</a>[]

---

##### `putReadinessProbe` <a name="putReadinessProbe" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putReadinessProbe"></a>

```typescript
public putReadinessProbe(value: ContainerGroupContainerReadinessProbe): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putReadinessProbe.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe">ContainerGroupContainerReadinessProbe</a>

---

##### `putSecurity` <a name="putSecurity" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putSecurity"></a>

```typescript
public putSecurity(value: IResolvable | ContainerGroupContainerSecurity[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putSecurity.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurity">ContainerGroupContainerSecurity</a>[]

---

##### `putVolume` <a name="putVolume" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putVolume"></a>

```typescript
public putVolume(value: IResolvable | ContainerGroupContainerVolume[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putVolume.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume">ContainerGroupContainerVolume</a>[]

---

##### `resetCommands` <a name="resetCommands" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetCommands"></a>

```typescript
public resetCommands(): void
```

##### `resetCpuLimit` <a name="resetCpuLimit" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetCpuLimit"></a>

```typescript
public resetCpuLimit(): void
```

##### `resetEnvironmentVariables` <a name="resetEnvironmentVariables" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetEnvironmentVariables"></a>

```typescript
public resetEnvironmentVariables(): void
```

##### `resetGpu` <a name="resetGpu" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetGpu"></a>

```typescript
public resetGpu(): void
```

##### `resetGpuLimit` <a name="resetGpuLimit" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetGpuLimit"></a>

```typescript
public resetGpuLimit(): void
```

##### `resetLivenessProbe` <a name="resetLivenessProbe" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetLivenessProbe"></a>

```typescript
public resetLivenessProbe(): void
```

##### `resetMemoryLimit` <a name="resetMemoryLimit" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetMemoryLimit"></a>

```typescript
public resetMemoryLimit(): void
```

##### `resetPorts` <a name="resetPorts" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetPorts"></a>

```typescript
public resetPorts(): void
```

##### `resetReadinessProbe` <a name="resetReadinessProbe" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetReadinessProbe"></a>

```typescript
public resetReadinessProbe(): void
```

##### `resetSecureEnvironmentVariables` <a name="resetSecureEnvironmentVariables" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetSecureEnvironmentVariables"></a>

```typescript
public resetSecureEnvironmentVariables(): void
```

##### `resetSecurity` <a name="resetSecurity" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetSecurity"></a>

```typescript
public resetSecurity(): void
```

##### `resetVolume` <a name="resetVolume" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetVolume"></a>

```typescript
public resetVolume(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.gpu">gpu</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference">ContainerGroupContainerGpuOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.gpuLimit">gpuLimit</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference">ContainerGroupContainerGpuLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.livenessProbe">livenessProbe</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference">ContainerGroupContainerLivenessProbeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.ports">ports</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList">ContainerGroupContainerPortsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.readinessProbe">readinessProbe</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference">ContainerGroupContainerReadinessProbeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.security">security</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList">ContainerGroupContainerSecurityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.volume">volume</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList">ContainerGroupContainerVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.commandsInput">commandsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.cpuInput">cpuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.cpuLimitInput">cpuLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.environmentVariablesInput">environmentVariablesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.gpuInput">gpuInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpu">ContainerGroupContainerGpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.gpuLimitInput">gpuLimitInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimit">ContainerGroupContainerGpuLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.imageInput">imageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.livenessProbeInput">livenessProbeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe">ContainerGroupContainerLivenessProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.memoryInput">memoryInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.memoryLimitInput">memoryLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.portsInput">portsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPorts">ContainerGroupContainerPorts</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.readinessProbeInput">readinessProbeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe">ContainerGroupContainerReadinessProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.secureEnvironmentVariablesInput">secureEnvironmentVariablesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.securityInput">securityInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurity">ContainerGroupContainerSecurity</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.volumeInput">volumeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume">ContainerGroupContainerVolume</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.commands">commands</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.cpu">cpu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.cpuLimit">cpuLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.environmentVariables">environmentVariables</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.memory">memory</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.memoryLimit">memoryLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.secureEnvironmentVariables">secureEnvironmentVariables</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer">ContainerGroupContainer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gpu`<sup>Required</sup> <a name="gpu" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.gpu"></a>

```typescript
public readonly gpu: ContainerGroupContainerGpuOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference">ContainerGroupContainerGpuOutputReference</a>

---

##### `gpuLimit`<sup>Required</sup> <a name="gpuLimit" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.gpuLimit"></a>

```typescript
public readonly gpuLimit: ContainerGroupContainerGpuLimitOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference">ContainerGroupContainerGpuLimitOutputReference</a>

---

##### `livenessProbe`<sup>Required</sup> <a name="livenessProbe" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.livenessProbe"></a>

```typescript
public readonly livenessProbe: ContainerGroupContainerLivenessProbeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference">ContainerGroupContainerLivenessProbeOutputReference</a>

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.ports"></a>

```typescript
public readonly ports: ContainerGroupContainerPortsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList">ContainerGroupContainerPortsList</a>

---

##### `readinessProbe`<sup>Required</sup> <a name="readinessProbe" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.readinessProbe"></a>

```typescript
public readonly readinessProbe: ContainerGroupContainerReadinessProbeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference">ContainerGroupContainerReadinessProbeOutputReference</a>

---

##### `security`<sup>Required</sup> <a name="security" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.security"></a>

```typescript
public readonly security: ContainerGroupContainerSecurityList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList">ContainerGroupContainerSecurityList</a>

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.volume"></a>

```typescript
public readonly volume: ContainerGroupContainerVolumeList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList">ContainerGroupContainerVolumeList</a>

---

##### `commandsInput`<sup>Optional</sup> <a name="commandsInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.commandsInput"></a>

```typescript
public readonly commandsInput: string[];
```

- *Type:* string[]

---

##### `cpuInput`<sup>Optional</sup> <a name="cpuInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.cpuInput"></a>

```typescript
public readonly cpuInput: number;
```

- *Type:* number

---

##### `cpuLimitInput`<sup>Optional</sup> <a name="cpuLimitInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.cpuLimitInput"></a>

```typescript
public readonly cpuLimitInput: number;
```

- *Type:* number

---

##### `environmentVariablesInput`<sup>Optional</sup> <a name="environmentVariablesInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.environmentVariablesInput"></a>

```typescript
public readonly environmentVariablesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `gpuInput`<sup>Optional</sup> <a name="gpuInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.gpuInput"></a>

```typescript
public readonly gpuInput: ContainerGroupContainerGpu;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpu">ContainerGroupContainerGpu</a>

---

##### `gpuLimitInput`<sup>Optional</sup> <a name="gpuLimitInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.gpuLimitInput"></a>

```typescript
public readonly gpuLimitInput: ContainerGroupContainerGpuLimit;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimit">ContainerGroupContainerGpuLimit</a>

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.imageInput"></a>

```typescript
public readonly imageInput: string;
```

- *Type:* string

---

##### `livenessProbeInput`<sup>Optional</sup> <a name="livenessProbeInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.livenessProbeInput"></a>

```typescript
public readonly livenessProbeInput: ContainerGroupContainerLivenessProbe;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe">ContainerGroupContainerLivenessProbe</a>

---

##### `memoryInput`<sup>Optional</sup> <a name="memoryInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.memoryInput"></a>

```typescript
public readonly memoryInput: number;
```

- *Type:* number

---

##### `memoryLimitInput`<sup>Optional</sup> <a name="memoryLimitInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.memoryLimitInput"></a>

```typescript
public readonly memoryLimitInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.portsInput"></a>

```typescript
public readonly portsInput: IResolvable | ContainerGroupContainerPorts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPorts">ContainerGroupContainerPorts</a>[]

---

##### `readinessProbeInput`<sup>Optional</sup> <a name="readinessProbeInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.readinessProbeInput"></a>

```typescript
public readonly readinessProbeInput: ContainerGroupContainerReadinessProbe;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe">ContainerGroupContainerReadinessProbe</a>

---

##### `secureEnvironmentVariablesInput`<sup>Optional</sup> <a name="secureEnvironmentVariablesInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.secureEnvironmentVariablesInput"></a>

```typescript
public readonly secureEnvironmentVariablesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `securityInput`<sup>Optional</sup> <a name="securityInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.securityInput"></a>

```typescript
public readonly securityInput: IResolvable | ContainerGroupContainerSecurity[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurity">ContainerGroupContainerSecurity</a>[]

---

##### `volumeInput`<sup>Optional</sup> <a name="volumeInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.volumeInput"></a>

```typescript
public readonly volumeInput: IResolvable | ContainerGroupContainerVolume[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume">ContainerGroupContainerVolume</a>[]

---

##### `commands`<sup>Required</sup> <a name="commands" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.commands"></a>

```typescript
public readonly commands: string[];
```

- *Type:* string[]

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.cpu"></a>

```typescript
public readonly cpu: number;
```

- *Type:* number

---

##### `cpuLimit`<sup>Required</sup> <a name="cpuLimit" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.cpuLimit"></a>

```typescript
public readonly cpuLimit: number;
```

- *Type:* number

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.memory"></a>

```typescript
public readonly memory: number;
```

- *Type:* number

---

##### `memoryLimit`<sup>Required</sup> <a name="memoryLimit" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.memoryLimit"></a>

```typescript
public readonly memoryLimit: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `secureEnvironmentVariables`<sup>Required</sup> <a name="secureEnvironmentVariables" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.secureEnvironmentVariables"></a>

```typescript
public readonly secureEnvironmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerGroupContainer;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer">ContainerGroupContainer</a>

---


### ContainerGroupContainerPortsList <a name="ContainerGroupContainerPortsList" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.Initializer"></a>

```typescript
import { containerGroup } from '@cdktf/provider-azurerm'

new containerGroup.ContainerGroupContainerPortsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.get"></a>

```typescript
public get(index: number): ContainerGroupContainerPortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPorts">ContainerGroupContainerPorts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerGroupContainerPorts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPorts">ContainerGroupContainerPorts</a>[]

---


### ContainerGroupContainerPortsOutputReference <a name="ContainerGroupContainerPortsOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.Initializer"></a>

```typescript
import { containerGroup } from '@cdktf/provider-azurerm'

new containerGroup.ContainerGroupContainerPortsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPorts">ContainerGroupContainerPorts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerGroupContainerPorts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPorts">ContainerGroupContainerPorts</a>

---


### ContainerGroupContainerReadinessProbeHttpGetList <a name="ContainerGroupContainerReadinessProbeHttpGetList" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.Initializer"></a>

```typescript
import { containerGroup } from '@cdktf/provider-azurerm'

new containerGroup.ContainerGroupContainerReadinessProbeHttpGetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.get"></a>

```typescript
public get(index: number): ContainerGroupContainerReadinessProbeHttpGetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet">ContainerGroupContainerReadinessProbeHttpGet</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerGroupContainerReadinessProbeHttpGet[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet">ContainerGroupContainerReadinessProbeHttpGet</a>[]

---


### ContainerGroupContainerReadinessProbeHttpGetOutputReference <a name="ContainerGroupContainerReadinessProbeHttpGetOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.Initializer"></a>

```typescript
import { containerGroup } from '@cdktf/provider-azurerm'

new containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.resetHttpHeaders">resetHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.resetScheme">resetScheme</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHttpHeaders` <a name="resetHttpHeaders" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.resetHttpHeaders"></a>

```typescript
public resetHttpHeaders(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetScheme` <a name="resetScheme" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.resetScheme"></a>

```typescript
public resetScheme(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.httpHeadersInput">httpHeadersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.schemeInput">schemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.httpHeaders">httpHeaders</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.scheme">scheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet">ContainerGroupContainerReadinessProbeHttpGet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `httpHeadersInput`<sup>Optional</sup> <a name="httpHeadersInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.httpHeadersInput"></a>

```typescript
public readonly httpHeadersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `schemeInput`<sup>Optional</sup> <a name="schemeInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.schemeInput"></a>

```typescript
public readonly schemeInput: string;
```

- *Type:* string

---

##### `httpHeaders`<sup>Required</sup> <a name="httpHeaders" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.httpHeaders"></a>

```typescript
public readonly httpHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerGroupContainerReadinessProbeHttpGet;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet">ContainerGroupContainerReadinessProbeHttpGet</a>

---


### ContainerGroupContainerReadinessProbeOutputReference <a name="ContainerGroupContainerReadinessProbeOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.Initializer"></a>

```typescript
import { containerGroup } from '@cdktf/provider-azurerm'

new containerGroup.ContainerGroupContainerReadinessProbeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.putHttpGet">putHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resetExec">resetExec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resetFailureThreshold">resetFailureThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resetHttpGet">resetHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resetInitialDelaySeconds">resetInitialDelaySeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resetPeriodSeconds">resetPeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resetSuccessThreshold">resetSuccessThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resetTimeoutSeconds">resetTimeoutSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHttpGet` <a name="putHttpGet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.putHttpGet"></a>

```typescript
public putHttpGet(value: IResolvable | ContainerGroupContainerReadinessProbeHttpGet[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.putHttpGet.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet">ContainerGroupContainerReadinessProbeHttpGet</a>[]

---

##### `resetExec` <a name="resetExec" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resetExec"></a>

```typescript
public resetExec(): void
```

##### `resetFailureThreshold` <a name="resetFailureThreshold" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resetFailureThreshold"></a>

```typescript
public resetFailureThreshold(): void
```

##### `resetHttpGet` <a name="resetHttpGet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resetHttpGet"></a>

```typescript
public resetHttpGet(): void
```

##### `resetInitialDelaySeconds` <a name="resetInitialDelaySeconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resetInitialDelaySeconds"></a>

```typescript
public resetInitialDelaySeconds(): void
```

##### `resetPeriodSeconds` <a name="resetPeriodSeconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resetPeriodSeconds"></a>

```typescript
public resetPeriodSeconds(): void
```

##### `resetSuccessThreshold` <a name="resetSuccessThreshold" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resetSuccessThreshold"></a>

```typescript
public resetSuccessThreshold(): void
```

##### `resetTimeoutSeconds` <a name="resetTimeoutSeconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resetTimeoutSeconds"></a>

```typescript
public resetTimeoutSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.httpGet">httpGet</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList">ContainerGroupContainerReadinessProbeHttpGetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.execInput">execInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.failureThresholdInput">failureThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.httpGetInput">httpGetInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet">ContainerGroupContainerReadinessProbeHttpGet</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.initialDelaySecondsInput">initialDelaySecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.periodSecondsInput">periodSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.successThresholdInput">successThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.timeoutSecondsInput">timeoutSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.exec">exec</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.failureThreshold">failureThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.initialDelaySeconds">initialDelaySeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.periodSeconds">periodSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.successThreshold">successThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe">ContainerGroupContainerReadinessProbe</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `httpGet`<sup>Required</sup> <a name="httpGet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.httpGet"></a>

```typescript
public readonly httpGet: ContainerGroupContainerReadinessProbeHttpGetList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList">ContainerGroupContainerReadinessProbeHttpGetList</a>

---

##### `execInput`<sup>Optional</sup> <a name="execInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.execInput"></a>

```typescript
public readonly execInput: string[];
```

- *Type:* string[]

---

##### `failureThresholdInput`<sup>Optional</sup> <a name="failureThresholdInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.failureThresholdInput"></a>

```typescript
public readonly failureThresholdInput: number;
```

- *Type:* number

---

##### `httpGetInput`<sup>Optional</sup> <a name="httpGetInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.httpGetInput"></a>

```typescript
public readonly httpGetInput: IResolvable | ContainerGroupContainerReadinessProbeHttpGet[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet">ContainerGroupContainerReadinessProbeHttpGet</a>[]

---

##### `initialDelaySecondsInput`<sup>Optional</sup> <a name="initialDelaySecondsInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.initialDelaySecondsInput"></a>

```typescript
public readonly initialDelaySecondsInput: number;
```

- *Type:* number

---

##### `periodSecondsInput`<sup>Optional</sup> <a name="periodSecondsInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.periodSecondsInput"></a>

```typescript
public readonly periodSecondsInput: number;
```

- *Type:* number

---

##### `successThresholdInput`<sup>Optional</sup> <a name="successThresholdInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.successThresholdInput"></a>

```typescript
public readonly successThresholdInput: number;
```

- *Type:* number

---

##### `timeoutSecondsInput`<sup>Optional</sup> <a name="timeoutSecondsInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.timeoutSecondsInput"></a>

```typescript
public readonly timeoutSecondsInput: number;
```

- *Type:* number

---

##### `exec`<sup>Required</sup> <a name="exec" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.exec"></a>

```typescript
public readonly exec: string[];
```

- *Type:* string[]

---

##### `failureThreshold`<sup>Required</sup> <a name="failureThreshold" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.failureThreshold"></a>

```typescript
public readonly failureThreshold: number;
```

- *Type:* number

---

##### `initialDelaySeconds`<sup>Required</sup> <a name="initialDelaySeconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.initialDelaySeconds"></a>

```typescript
public readonly initialDelaySeconds: number;
```

- *Type:* number

---

##### `periodSeconds`<sup>Required</sup> <a name="periodSeconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.periodSeconds"></a>

```typescript
public readonly periodSeconds: number;
```

- *Type:* number

---

##### `successThreshold`<sup>Required</sup> <a name="successThreshold" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.successThreshold"></a>

```typescript
public readonly successThreshold: number;
```

- *Type:* number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerGroupContainerReadinessProbe;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe">ContainerGroupContainerReadinessProbe</a>

---


### ContainerGroupContainerSecurityList <a name="ContainerGroupContainerSecurityList" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.Initializer"></a>

```typescript
import { containerGroup } from '@cdktf/provider-azurerm'

new containerGroup.ContainerGroupContainerSecurityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.get"></a>

```typescript
public get(index: number): ContainerGroupContainerSecurityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurity">ContainerGroupContainerSecurity</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerGroupContainerSecurity[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurity">ContainerGroupContainerSecurity</a>[]

---


### ContainerGroupContainerSecurityOutputReference <a name="ContainerGroupContainerSecurityOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.Initializer"></a>

```typescript
import { containerGroup } from '@cdktf/provider-azurerm'

new containerGroup.ContainerGroupContainerSecurityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.property.privilegeEnabledInput">privilegeEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.property.privilegeEnabled">privilegeEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurity">ContainerGroupContainerSecurity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `privilegeEnabledInput`<sup>Optional</sup> <a name="privilegeEnabledInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.property.privilegeEnabledInput"></a>

```typescript
public readonly privilegeEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `privilegeEnabled`<sup>Required</sup> <a name="privilegeEnabled" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.property.privilegeEnabled"></a>

```typescript
public readonly privilegeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerGroupContainerSecurity;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurity">ContainerGroupContainerSecurity</a>

---


### ContainerGroupContainerVolumeGitRepoOutputReference <a name="ContainerGroupContainerVolumeGitRepoOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.Initializer"></a>

```typescript
import { containerGroup } from '@cdktf/provider-azurerm'

new containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.resetDirectory">resetDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.resetRevision">resetRevision</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDirectory` <a name="resetDirectory" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.resetDirectory"></a>

```typescript
public resetDirectory(): void
```

##### `resetRevision` <a name="resetRevision" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.resetRevision"></a>

```typescript
public resetRevision(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.directoryInput">directoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.revisionInput">revisionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.directory">directory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.revision">revision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepo">ContainerGroupContainerVolumeGitRepo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `directoryInput`<sup>Optional</sup> <a name="directoryInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.directoryInput"></a>

```typescript
public readonly directoryInput: string;
```

- *Type:* string

---

##### `revisionInput`<sup>Optional</sup> <a name="revisionInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.revisionInput"></a>

```typescript
public readonly revisionInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `directory`<sup>Required</sup> <a name="directory" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.directory"></a>

```typescript
public readonly directory: string;
```

- *Type:* string

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.revision"></a>

```typescript
public readonly revision: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerGroupContainerVolumeGitRepo;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepo">ContainerGroupContainerVolumeGitRepo</a>

---


### ContainerGroupContainerVolumeList <a name="ContainerGroupContainerVolumeList" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.Initializer"></a>

```typescript
import { containerGroup } from '@cdktf/provider-azurerm'

new containerGroup.ContainerGroupContainerVolumeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.get"></a>

```typescript
public get(index: number): ContainerGroupContainerVolumeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume">ContainerGroupContainerVolume</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerGroupContainerVolume[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume">ContainerGroupContainerVolume</a>[]

---


### ContainerGroupContainerVolumeOutputReference <a name="ContainerGroupContainerVolumeOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.Initializer"></a>

```typescript
import { containerGroup } from '@cdktf/provider-azurerm'

new containerGroup.ContainerGroupContainerVolumeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.putGitRepo">putGitRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resetEmptyDir">resetEmptyDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resetGitRepo">resetGitRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resetSecret">resetSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resetShareName">resetShareName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resetStorageAccountKey">resetStorageAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resetStorageAccountName">resetStorageAccountName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGitRepo` <a name="putGitRepo" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.putGitRepo"></a>

```typescript
public putGitRepo(value: ContainerGroupContainerVolumeGitRepo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.putGitRepo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepo">ContainerGroupContainerVolumeGitRepo</a>

---

##### `resetEmptyDir` <a name="resetEmptyDir" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resetEmptyDir"></a>

```typescript
public resetEmptyDir(): void
```

##### `resetGitRepo` <a name="resetGitRepo" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resetGitRepo"></a>

```typescript
public resetGitRepo(): void
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resetReadOnly"></a>

```typescript
public resetReadOnly(): void
```

##### `resetSecret` <a name="resetSecret" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resetSecret"></a>

```typescript
public resetSecret(): void
```

##### `resetShareName` <a name="resetShareName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resetShareName"></a>

```typescript
public resetShareName(): void
```

##### `resetStorageAccountKey` <a name="resetStorageAccountKey" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resetStorageAccountKey"></a>

```typescript
public resetStorageAccountKey(): void
```

##### `resetStorageAccountName` <a name="resetStorageAccountName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resetStorageAccountName"></a>

```typescript
public resetStorageAccountName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.gitRepo">gitRepo</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference">ContainerGroupContainerVolumeGitRepoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.emptyDirInput">emptyDirInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.gitRepoInput">gitRepoInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepo">ContainerGroupContainerVolumeGitRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.mountPathInput">mountPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.secretInput">secretInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.shareNameInput">shareNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.storageAccountKeyInput">storageAccountKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.storageAccountNameInput">storageAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.emptyDir">emptyDir</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.mountPath">mountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.secret">secret</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.shareName">shareName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.storageAccountKey">storageAccountKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.storageAccountName">storageAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume">ContainerGroupContainerVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gitRepo`<sup>Required</sup> <a name="gitRepo" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.gitRepo"></a>

```typescript
public readonly gitRepo: ContainerGroupContainerVolumeGitRepoOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference">ContainerGroupContainerVolumeGitRepoOutputReference</a>

---

##### `emptyDirInput`<sup>Optional</sup> <a name="emptyDirInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.emptyDirInput"></a>

```typescript
public readonly emptyDirInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `gitRepoInput`<sup>Optional</sup> <a name="gitRepoInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.gitRepoInput"></a>

```typescript
public readonly gitRepoInput: ContainerGroupContainerVolumeGitRepo;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepo">ContainerGroupContainerVolumeGitRepo</a>

---

##### `mountPathInput`<sup>Optional</sup> <a name="mountPathInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.mountPathInput"></a>

```typescript
public readonly mountPathInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.readOnlyInput"></a>

```typescript
public readonly readOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.secretInput"></a>

```typescript
public readonly secretInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `shareNameInput`<sup>Optional</sup> <a name="shareNameInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.shareNameInput"></a>

```typescript
public readonly shareNameInput: string;
```

- *Type:* string

---

##### `storageAccountKeyInput`<sup>Optional</sup> <a name="storageAccountKeyInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.storageAccountKeyInput"></a>

```typescript
public readonly storageAccountKeyInput: string;
```

- *Type:* string

---

##### `storageAccountNameInput`<sup>Optional</sup> <a name="storageAccountNameInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.storageAccountNameInput"></a>

```typescript
public readonly storageAccountNameInput: string;
```

- *Type:* string

---

##### `emptyDir`<sup>Required</sup> <a name="emptyDir" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.emptyDir"></a>

```typescript
public readonly emptyDir: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.secret"></a>

```typescript
public readonly secret: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `shareName`<sup>Required</sup> <a name="shareName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.shareName"></a>

```typescript
public readonly shareName: string;
```

- *Type:* string

---

##### `storageAccountKey`<sup>Required</sup> <a name="storageAccountKey" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.storageAccountKey"></a>

```typescript
public readonly storageAccountKey: string;
```

- *Type:* string

---

##### `storageAccountName`<sup>Required</sup> <a name="storageAccountName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.storageAccountName"></a>

```typescript
public readonly storageAccountName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerGroupContainerVolume;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume">ContainerGroupContainerVolume</a>

---


### ContainerGroupDiagnosticsLogAnalyticsOutputReference <a name="ContainerGroupDiagnosticsLogAnalyticsOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.Initializer"></a>

```typescript
import { containerGroup } from '@cdktf/provider-azurerm'

new containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.resetLogType">resetLogType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.resetMetadata">resetMetadata</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogType` <a name="resetLogType" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.resetLogType"></a>

```typescript
public resetLogType(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.resetMetadata"></a>

```typescript
public resetMetadata(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.logTypeInput">logTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.metadataInput">metadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.workspaceKeyInput">workspaceKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.logType">logType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.workspaceKey">workspaceKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics">ContainerGroupDiagnosticsLogAnalytics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logTypeInput`<sup>Optional</sup> <a name="logTypeInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.logTypeInput"></a>

```typescript
public readonly logTypeInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.metadataInput"></a>

```typescript
public readonly metadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceKeyInput`<sup>Optional</sup> <a name="workspaceKeyInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.workspaceKeyInput"></a>

```typescript
public readonly workspaceKeyInput: string;
```

- *Type:* string

---

##### `logType`<sup>Required</sup> <a name="logType" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.logType"></a>

```typescript
public readonly logType: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `workspaceKey`<sup>Required</sup> <a name="workspaceKey" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.workspaceKey"></a>

```typescript
public readonly workspaceKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerGroupDiagnosticsLogAnalytics;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics">ContainerGroupDiagnosticsLogAnalytics</a>

---


### ContainerGroupDiagnosticsOutputReference <a name="ContainerGroupDiagnosticsOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.Initializer"></a>

```typescript
import { containerGroup } from '@cdktf/provider-azurerm'

new containerGroup.ContainerGroupDiagnosticsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.putLogAnalytics">putLogAnalytics</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLogAnalytics` <a name="putLogAnalytics" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.putLogAnalytics"></a>

```typescript
public putLogAnalytics(value: ContainerGroupDiagnosticsLogAnalytics): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.putLogAnalytics.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics">ContainerGroupDiagnosticsLogAnalytics</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.property.logAnalytics">logAnalytics</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference">ContainerGroupDiagnosticsLogAnalyticsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.property.logAnalyticsInput">logAnalyticsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics">ContainerGroupDiagnosticsLogAnalytics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnostics">ContainerGroupDiagnostics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logAnalytics`<sup>Required</sup> <a name="logAnalytics" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.property.logAnalytics"></a>

```typescript
public readonly logAnalytics: ContainerGroupDiagnosticsLogAnalyticsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference">ContainerGroupDiagnosticsLogAnalyticsOutputReference</a>

---

##### `logAnalyticsInput`<sup>Optional</sup> <a name="logAnalyticsInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.property.logAnalyticsInput"></a>

```typescript
public readonly logAnalyticsInput: ContainerGroupDiagnosticsLogAnalytics;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics">ContainerGroupDiagnosticsLogAnalytics</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerGroupDiagnostics;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnostics">ContainerGroupDiagnostics</a>

---


### ContainerGroupDnsConfigOutputReference <a name="ContainerGroupDnsConfigOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.Initializer"></a>

```typescript
import { containerGroup } from '@cdktf/provider-azurerm'

new containerGroup.ContainerGroupDnsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.resetSearchDomains">resetSearchDomains</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOptions` <a name="resetOptions" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.resetOptions"></a>

```typescript
public resetOptions(): void
```

##### `resetSearchDomains` <a name="resetSearchDomains" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.resetSearchDomains"></a>

```typescript
public resetSearchDomains(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.nameserversInput">nameserversInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.optionsInput">optionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.searchDomainsInput">searchDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.nameservers">nameservers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.options">options</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.searchDomains">searchDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig">ContainerGroupDnsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameserversInput`<sup>Optional</sup> <a name="nameserversInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.nameserversInput"></a>

```typescript
public readonly nameserversInput: string[];
```

- *Type:* string[]

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.optionsInput"></a>

```typescript
public readonly optionsInput: string[];
```

- *Type:* string[]

---

##### `searchDomainsInput`<sup>Optional</sup> <a name="searchDomainsInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.searchDomainsInput"></a>

```typescript
public readonly searchDomainsInput: string[];
```

- *Type:* string[]

---

##### `nameservers`<sup>Required</sup> <a name="nameservers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.nameservers"></a>

```typescript
public readonly nameservers: string[];
```

- *Type:* string[]

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.options"></a>

```typescript
public readonly options: string[];
```

- *Type:* string[]

---

##### `searchDomains`<sup>Required</sup> <a name="searchDomains" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.searchDomains"></a>

```typescript
public readonly searchDomains: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerGroupDnsConfig;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig">ContainerGroupDnsConfig</a>

---


### ContainerGroupExposedPortList <a name="ContainerGroupExposedPortList" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.Initializer"></a>

```typescript
import { containerGroup } from '@cdktf/provider-azurerm'

new containerGroup.ContainerGroupExposedPortList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.get"></a>

```typescript
public get(index: number): ContainerGroupExposedPortOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort">ContainerGroupExposedPort</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerGroupExposedPort[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort">ContainerGroupExposedPort</a>[]

---


### ContainerGroupExposedPortOutputReference <a name="ContainerGroupExposedPortOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.Initializer"></a>

```typescript
import { containerGroup } from '@cdktf/provider-azurerm'

new containerGroup.ContainerGroupExposedPortOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort">ContainerGroupExposedPort</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerGroupExposedPort;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort">ContainerGroupExposedPort</a>

---


### ContainerGroupIdentityOutputReference <a name="ContainerGroupIdentityOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.Initializer"></a>

```typescript
import { containerGroup } from '@cdktf/provider-azurerm'

new containerGroup.ContainerGroupIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.resetIdentityIds"></a>

```typescript
public resetIdentityIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentity">ContainerGroupIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.identityIdsInput"></a>

```typescript
public readonly identityIdsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerGroupIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentity">ContainerGroupIdentity</a>

---


### ContainerGroupImageRegistryCredentialList <a name="ContainerGroupImageRegistryCredentialList" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.Initializer"></a>

```typescript
import { containerGroup } from '@cdktf/provider-azurerm'

new containerGroup.ContainerGroupImageRegistryCredentialList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.get"></a>

```typescript
public get(index: number): ContainerGroupImageRegistryCredentialOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential">ContainerGroupImageRegistryCredential</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerGroupImageRegistryCredential[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential">ContainerGroupImageRegistryCredential</a>[]

---


### ContainerGroupImageRegistryCredentialOutputReference <a name="ContainerGroupImageRegistryCredentialOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.Initializer"></a>

```typescript
import { containerGroup } from '@cdktf/provider-azurerm'

new containerGroup.ContainerGroupImageRegistryCredentialOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.resetUserAssignedIdentityId">resetUserAssignedIdentityId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetUserAssignedIdentityId` <a name="resetUserAssignedIdentityId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.resetUserAssignedIdentityId"></a>

```typescript
public resetUserAssignedIdentityId(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.serverInput">serverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.userAssignedIdentityIdInput">userAssignedIdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.server">server</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.userAssignedIdentityId">userAssignedIdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential">ContainerGroupImageRegistryCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `serverInput`<sup>Optional</sup> <a name="serverInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.serverInput"></a>

```typescript
public readonly serverInput: string;
```

- *Type:* string

---

##### `userAssignedIdentityIdInput`<sup>Optional</sup> <a name="userAssignedIdentityIdInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.userAssignedIdentityIdInput"></a>

```typescript
public readonly userAssignedIdentityIdInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.server"></a>

```typescript
public readonly server: string;
```

- *Type:* string

---

##### `userAssignedIdentityId`<sup>Required</sup> <a name="userAssignedIdentityId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.userAssignedIdentityId"></a>

```typescript
public readonly userAssignedIdentityId: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerGroupImageRegistryCredential;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential">ContainerGroupImageRegistryCredential</a>

---


### ContainerGroupInitContainerList <a name="ContainerGroupInitContainerList" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.Initializer"></a>

```typescript
import { containerGroup } from '@cdktf/provider-azurerm'

new containerGroup.ContainerGroupInitContainerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.get"></a>

```typescript
public get(index: number): ContainerGroupInitContainerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer">ContainerGroupInitContainer</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerGroupInitContainer[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer">ContainerGroupInitContainer</a>[]

---


### ContainerGroupInitContainerOutputReference <a name="ContainerGroupInitContainerOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.Initializer"></a>

```typescript
import { containerGroup } from '@cdktf/provider-azurerm'

new containerGroup.ContainerGroupInitContainerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.putSecurity">putSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.putVolume">putVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.resetCommands">resetCommands</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.resetEnvironmentVariables">resetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.resetSecureEnvironmentVariables">resetSecureEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.resetSecurity">resetSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.resetVolume">resetVolume</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSecurity` <a name="putSecurity" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.putSecurity"></a>

```typescript
public putSecurity(value: IResolvable | ContainerGroupInitContainerSecurity[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.putSecurity.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurity">ContainerGroupInitContainerSecurity</a>[]

---

##### `putVolume` <a name="putVolume" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.putVolume"></a>

```typescript
public putVolume(value: IResolvable | ContainerGroupInitContainerVolume[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.putVolume.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume">ContainerGroupInitContainerVolume</a>[]

---

##### `resetCommands` <a name="resetCommands" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.resetCommands"></a>

```typescript
public resetCommands(): void
```

##### `resetEnvironmentVariables` <a name="resetEnvironmentVariables" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.resetEnvironmentVariables"></a>

```typescript
public resetEnvironmentVariables(): void
```

##### `resetSecureEnvironmentVariables` <a name="resetSecureEnvironmentVariables" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.resetSecureEnvironmentVariables"></a>

```typescript
public resetSecureEnvironmentVariables(): void
```

##### `resetSecurity` <a name="resetSecurity" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.resetSecurity"></a>

```typescript
public resetSecurity(): void
```

##### `resetVolume` <a name="resetVolume" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.resetVolume"></a>

```typescript
public resetVolume(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.security">security</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList">ContainerGroupInitContainerSecurityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.volume">volume</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList">ContainerGroupInitContainerVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.commandsInput">commandsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.environmentVariablesInput">environmentVariablesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.imageInput">imageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.secureEnvironmentVariablesInput">secureEnvironmentVariablesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.securityInput">securityInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurity">ContainerGroupInitContainerSecurity</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.volumeInput">volumeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume">ContainerGroupInitContainerVolume</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.commands">commands</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.environmentVariables">environmentVariables</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.secureEnvironmentVariables">secureEnvironmentVariables</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer">ContainerGroupInitContainer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `security`<sup>Required</sup> <a name="security" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.security"></a>

```typescript
public readonly security: ContainerGroupInitContainerSecurityList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList">ContainerGroupInitContainerSecurityList</a>

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.volume"></a>

```typescript
public readonly volume: ContainerGroupInitContainerVolumeList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList">ContainerGroupInitContainerVolumeList</a>

---

##### `commandsInput`<sup>Optional</sup> <a name="commandsInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.commandsInput"></a>

```typescript
public readonly commandsInput: string[];
```

- *Type:* string[]

---

##### `environmentVariablesInput`<sup>Optional</sup> <a name="environmentVariablesInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.environmentVariablesInput"></a>

```typescript
public readonly environmentVariablesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.imageInput"></a>

```typescript
public readonly imageInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `secureEnvironmentVariablesInput`<sup>Optional</sup> <a name="secureEnvironmentVariablesInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.secureEnvironmentVariablesInput"></a>

```typescript
public readonly secureEnvironmentVariablesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `securityInput`<sup>Optional</sup> <a name="securityInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.securityInput"></a>

```typescript
public readonly securityInput: IResolvable | ContainerGroupInitContainerSecurity[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurity">ContainerGroupInitContainerSecurity</a>[]

---

##### `volumeInput`<sup>Optional</sup> <a name="volumeInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.volumeInput"></a>

```typescript
public readonly volumeInput: IResolvable | ContainerGroupInitContainerVolume[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume">ContainerGroupInitContainerVolume</a>[]

---

##### `commands`<sup>Required</sup> <a name="commands" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.commands"></a>

```typescript
public readonly commands: string[];
```

- *Type:* string[]

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `secureEnvironmentVariables`<sup>Required</sup> <a name="secureEnvironmentVariables" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.secureEnvironmentVariables"></a>

```typescript
public readonly secureEnvironmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerGroupInitContainer;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer">ContainerGroupInitContainer</a>

---


### ContainerGroupInitContainerSecurityList <a name="ContainerGroupInitContainerSecurityList" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.Initializer"></a>

```typescript
import { containerGroup } from '@cdktf/provider-azurerm'

new containerGroup.ContainerGroupInitContainerSecurityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.get"></a>

```typescript
public get(index: number): ContainerGroupInitContainerSecurityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurity">ContainerGroupInitContainerSecurity</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerGroupInitContainerSecurity[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurity">ContainerGroupInitContainerSecurity</a>[]

---


### ContainerGroupInitContainerSecurityOutputReference <a name="ContainerGroupInitContainerSecurityOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.Initializer"></a>

```typescript
import { containerGroup } from '@cdktf/provider-azurerm'

new containerGroup.ContainerGroupInitContainerSecurityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.property.privilegeEnabledInput">privilegeEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.property.privilegeEnabled">privilegeEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurity">ContainerGroupInitContainerSecurity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `privilegeEnabledInput`<sup>Optional</sup> <a name="privilegeEnabledInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.property.privilegeEnabledInput"></a>

```typescript
public readonly privilegeEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `privilegeEnabled`<sup>Required</sup> <a name="privilegeEnabled" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.property.privilegeEnabled"></a>

```typescript
public readonly privilegeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerGroupInitContainerSecurity;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurity">ContainerGroupInitContainerSecurity</a>

---


### ContainerGroupInitContainerVolumeGitRepoOutputReference <a name="ContainerGroupInitContainerVolumeGitRepoOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.Initializer"></a>

```typescript
import { containerGroup } from '@cdktf/provider-azurerm'

new containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.resetDirectory">resetDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.resetRevision">resetRevision</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDirectory` <a name="resetDirectory" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.resetDirectory"></a>

```typescript
public resetDirectory(): void
```

##### `resetRevision` <a name="resetRevision" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.resetRevision"></a>

```typescript
public resetRevision(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.directoryInput">directoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.revisionInput">revisionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.directory">directory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.revision">revision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepo">ContainerGroupInitContainerVolumeGitRepo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `directoryInput`<sup>Optional</sup> <a name="directoryInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.directoryInput"></a>

```typescript
public readonly directoryInput: string;
```

- *Type:* string

---

##### `revisionInput`<sup>Optional</sup> <a name="revisionInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.revisionInput"></a>

```typescript
public readonly revisionInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `directory`<sup>Required</sup> <a name="directory" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.directory"></a>

```typescript
public readonly directory: string;
```

- *Type:* string

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.revision"></a>

```typescript
public readonly revision: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerGroupInitContainerVolumeGitRepo;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepo">ContainerGroupInitContainerVolumeGitRepo</a>

---


### ContainerGroupInitContainerVolumeList <a name="ContainerGroupInitContainerVolumeList" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.Initializer"></a>

```typescript
import { containerGroup } from '@cdktf/provider-azurerm'

new containerGroup.ContainerGroupInitContainerVolumeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.get"></a>

```typescript
public get(index: number): ContainerGroupInitContainerVolumeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume">ContainerGroupInitContainerVolume</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerGroupInitContainerVolume[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume">ContainerGroupInitContainerVolume</a>[]

---


### ContainerGroupInitContainerVolumeOutputReference <a name="ContainerGroupInitContainerVolumeOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.Initializer"></a>

```typescript
import { containerGroup } from '@cdktf/provider-azurerm'

new containerGroup.ContainerGroupInitContainerVolumeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.putGitRepo">putGitRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resetEmptyDir">resetEmptyDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resetGitRepo">resetGitRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resetSecret">resetSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resetShareName">resetShareName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resetStorageAccountKey">resetStorageAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resetStorageAccountName">resetStorageAccountName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGitRepo` <a name="putGitRepo" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.putGitRepo"></a>

```typescript
public putGitRepo(value: ContainerGroupInitContainerVolumeGitRepo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.putGitRepo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepo">ContainerGroupInitContainerVolumeGitRepo</a>

---

##### `resetEmptyDir` <a name="resetEmptyDir" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resetEmptyDir"></a>

```typescript
public resetEmptyDir(): void
```

##### `resetGitRepo` <a name="resetGitRepo" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resetGitRepo"></a>

```typescript
public resetGitRepo(): void
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resetReadOnly"></a>

```typescript
public resetReadOnly(): void
```

##### `resetSecret` <a name="resetSecret" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resetSecret"></a>

```typescript
public resetSecret(): void
```

##### `resetShareName` <a name="resetShareName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resetShareName"></a>

```typescript
public resetShareName(): void
```

##### `resetStorageAccountKey` <a name="resetStorageAccountKey" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resetStorageAccountKey"></a>

```typescript
public resetStorageAccountKey(): void
```

##### `resetStorageAccountName` <a name="resetStorageAccountName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resetStorageAccountName"></a>

```typescript
public resetStorageAccountName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.gitRepo">gitRepo</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference">ContainerGroupInitContainerVolumeGitRepoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.emptyDirInput">emptyDirInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.gitRepoInput">gitRepoInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepo">ContainerGroupInitContainerVolumeGitRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.mountPathInput">mountPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.secretInput">secretInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.shareNameInput">shareNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.storageAccountKeyInput">storageAccountKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.storageAccountNameInput">storageAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.emptyDir">emptyDir</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.mountPath">mountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.secret">secret</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.shareName">shareName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.storageAccountKey">storageAccountKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.storageAccountName">storageAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume">ContainerGroupInitContainerVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gitRepo`<sup>Required</sup> <a name="gitRepo" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.gitRepo"></a>

```typescript
public readonly gitRepo: ContainerGroupInitContainerVolumeGitRepoOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference">ContainerGroupInitContainerVolumeGitRepoOutputReference</a>

---

##### `emptyDirInput`<sup>Optional</sup> <a name="emptyDirInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.emptyDirInput"></a>

```typescript
public readonly emptyDirInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `gitRepoInput`<sup>Optional</sup> <a name="gitRepoInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.gitRepoInput"></a>

```typescript
public readonly gitRepoInput: ContainerGroupInitContainerVolumeGitRepo;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepo">ContainerGroupInitContainerVolumeGitRepo</a>

---

##### `mountPathInput`<sup>Optional</sup> <a name="mountPathInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.mountPathInput"></a>

```typescript
public readonly mountPathInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.readOnlyInput"></a>

```typescript
public readonly readOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.secretInput"></a>

```typescript
public readonly secretInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `shareNameInput`<sup>Optional</sup> <a name="shareNameInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.shareNameInput"></a>

```typescript
public readonly shareNameInput: string;
```

- *Type:* string

---

##### `storageAccountKeyInput`<sup>Optional</sup> <a name="storageAccountKeyInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.storageAccountKeyInput"></a>

```typescript
public readonly storageAccountKeyInput: string;
```

- *Type:* string

---

##### `storageAccountNameInput`<sup>Optional</sup> <a name="storageAccountNameInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.storageAccountNameInput"></a>

```typescript
public readonly storageAccountNameInput: string;
```

- *Type:* string

---

##### `emptyDir`<sup>Required</sup> <a name="emptyDir" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.emptyDir"></a>

```typescript
public readonly emptyDir: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.secret"></a>

```typescript
public readonly secret: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `shareName`<sup>Required</sup> <a name="shareName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.shareName"></a>

```typescript
public readonly shareName: string;
```

- *Type:* string

---

##### `storageAccountKey`<sup>Required</sup> <a name="storageAccountKey" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.storageAccountKey"></a>

```typescript
public readonly storageAccountKey: string;
```

- *Type:* string

---

##### `storageAccountName`<sup>Required</sup> <a name="storageAccountName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.storageAccountName"></a>

```typescript
public readonly storageAccountName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerGroupInitContainerVolume;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume">ContainerGroupInitContainerVolume</a>

---


### ContainerGroupTimeoutsOutputReference <a name="ContainerGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { containerGroup } from '@cdktf/provider-azurerm'

new containerGroup.ContainerGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts">ContainerGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts">ContainerGroupTimeouts</a>

---



