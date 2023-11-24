# `azurerm_healthcare_fhir_service`

Refer to the Terraform Registory for docs: [`azurerm_healthcare_fhir_service`](https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service).

# `healthcareFhirService` Submodule <a name="`healthcareFhirService` Submodule" id="@cdktf/provider-azurerm.healthcareFhirService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HealthcareFhirService <a name="HealthcareFhirService" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service azurerm_healthcare_fhir_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer"></a>

```typescript
import { healthcareFhirService } from '@cdktf/provider-azurerm'

new healthcareFhirService.HealthcareFhirService(scope: Construct, id: string, config: HealthcareFhirServiceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig">HealthcareFhirServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig">HealthcareFhirServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.putAuthentication">putAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.putCors">putCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.putOciArtifact">putOciArtifact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetAccessPolicyObjectIds">resetAccessPolicyObjectIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetConfigurationExportStorageAccountName">resetConfigurationExportStorageAccountName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetContainerRegistryLoginServerUrl">resetContainerRegistryLoginServerUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetCors">resetCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetKind">resetKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetOciArtifact">resetOciArtifact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putAuthentication` <a name="putAuthentication" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.putAuthentication"></a>

```typescript
public putAuthentication(value: HealthcareFhirServiceAuthentication): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.putAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication">HealthcareFhirServiceAuthentication</a>

---

##### `putCors` <a name="putCors" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.putCors"></a>

```typescript
public putCors(value: HealthcareFhirServiceCors): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.putCors.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors">HealthcareFhirServiceCors</a>

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.putIdentity"></a>

```typescript
public putIdentity(value: HealthcareFhirServiceIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentity">HealthcareFhirServiceIdentity</a>

---

##### `putOciArtifact` <a name="putOciArtifact" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.putOciArtifact"></a>

```typescript
public putOciArtifact(value: IResolvable | HealthcareFhirServiceOciArtifact[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.putOciArtifact.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifact">HealthcareFhirServiceOciArtifact</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.putTimeouts"></a>

```typescript
public putTimeouts(value: HealthcareFhirServiceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts">HealthcareFhirServiceTimeouts</a>

---

##### `resetAccessPolicyObjectIds` <a name="resetAccessPolicyObjectIds" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetAccessPolicyObjectIds"></a>

```typescript
public resetAccessPolicyObjectIds(): void
```

##### `resetConfigurationExportStorageAccountName` <a name="resetConfigurationExportStorageAccountName" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetConfigurationExportStorageAccountName"></a>

```typescript
public resetConfigurationExportStorageAccountName(): void
```

##### `resetContainerRegistryLoginServerUrl` <a name="resetContainerRegistryLoginServerUrl" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetContainerRegistryLoginServerUrl"></a>

```typescript
public resetContainerRegistryLoginServerUrl(): void
```

##### `resetCors` <a name="resetCors" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetCors"></a>

```typescript
public resetCors(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetKind` <a name="resetKind" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetKind"></a>

```typescript
public resetKind(): void
```

##### `resetOciArtifact` <a name="resetOciArtifact" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetOciArtifact"></a>

```typescript
public resetOciArtifact(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a HealthcareFhirService resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.isConstruct"></a>

```typescript
import { healthcareFhirService } from '@cdktf/provider-azurerm'

healthcareFhirService.HealthcareFhirService.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.isTerraformElement"></a>

```typescript
import { healthcareFhirService } from '@cdktf/provider-azurerm'

healthcareFhirService.HealthcareFhirService.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.isTerraformResource"></a>

```typescript
import { healthcareFhirService } from '@cdktf/provider-azurerm'

healthcareFhirService.HealthcareFhirService.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.generateConfigForImport"></a>

```typescript
import { healthcareFhirService } from '@cdktf/provider-azurerm'

healthcareFhirService.HealthcareFhirService.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a HealthcareFhirService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the HealthcareFhirService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing HealthcareFhirService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the HealthcareFhirService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.authentication">authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference">HealthcareFhirServiceAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference">HealthcareFhirServiceCorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference">HealthcareFhirServiceIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.ociArtifact">ociArtifact</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList">HealthcareFhirServiceOciArtifactList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference">HealthcareFhirServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.accessPolicyObjectIdsInput">accessPolicyObjectIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.authenticationInput">authenticationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication">HealthcareFhirServiceAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.configurationExportStorageAccountNameInput">configurationExportStorageAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.containerRegistryLoginServerUrlInput">containerRegistryLoginServerUrlInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.corsInput">corsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors">HealthcareFhirServiceCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentity">HealthcareFhirServiceIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.kindInput">kindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.ociArtifactInput">ociArtifactInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifact">HealthcareFhirServiceOciArtifact</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts">HealthcareFhirServiceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.accessPolicyObjectIds">accessPolicyObjectIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.configurationExportStorageAccountName">configurationExportStorageAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.containerRegistryLoginServerUrl">containerRegistryLoginServerUrl</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.authentication"></a>

```typescript
public readonly authentication: HealthcareFhirServiceAuthenticationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference">HealthcareFhirServiceAuthenticationOutputReference</a>

---

##### `cors`<sup>Required</sup> <a name="cors" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.cors"></a>

```typescript
public readonly cors: HealthcareFhirServiceCorsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference">HealthcareFhirServiceCorsOutputReference</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.identity"></a>

```typescript
public readonly identity: HealthcareFhirServiceIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference">HealthcareFhirServiceIdentityOutputReference</a>

---

##### `ociArtifact`<sup>Required</sup> <a name="ociArtifact" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.ociArtifact"></a>

```typescript
public readonly ociArtifact: HealthcareFhirServiceOciArtifactList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList">HealthcareFhirServiceOciArtifactList</a>

---

##### `publicNetworkAccessEnabled`<sup>Required</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.publicNetworkAccessEnabled"></a>

```typescript
public readonly publicNetworkAccessEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.timeouts"></a>

```typescript
public readonly timeouts: HealthcareFhirServiceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference">HealthcareFhirServiceTimeoutsOutputReference</a>

---

##### `accessPolicyObjectIdsInput`<sup>Optional</sup> <a name="accessPolicyObjectIdsInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.accessPolicyObjectIdsInput"></a>

```typescript
public readonly accessPolicyObjectIdsInput: string[];
```

- *Type:* string[]

---

##### `authenticationInput`<sup>Optional</sup> <a name="authenticationInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.authenticationInput"></a>

```typescript
public readonly authenticationInput: HealthcareFhirServiceAuthentication;
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication">HealthcareFhirServiceAuthentication</a>

---

##### `configurationExportStorageAccountNameInput`<sup>Optional</sup> <a name="configurationExportStorageAccountNameInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.configurationExportStorageAccountNameInput"></a>

```typescript
public readonly configurationExportStorageAccountNameInput: string;
```

- *Type:* string

---

##### `containerRegistryLoginServerUrlInput`<sup>Optional</sup> <a name="containerRegistryLoginServerUrlInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.containerRegistryLoginServerUrlInput"></a>

```typescript
public readonly containerRegistryLoginServerUrlInput: string[];
```

- *Type:* string[]

---

##### `corsInput`<sup>Optional</sup> <a name="corsInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.corsInput"></a>

```typescript
public readonly corsInput: HealthcareFhirServiceCors;
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors">HealthcareFhirServiceCors</a>

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.identityInput"></a>

```typescript
public readonly identityInput: HealthcareFhirServiceIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentity">HealthcareFhirServiceIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.kindInput"></a>

```typescript
public readonly kindInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `ociArtifactInput`<sup>Optional</sup> <a name="ociArtifactInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.ociArtifactInput"></a>

```typescript
public readonly ociArtifactInput: IResolvable | HealthcareFhirServiceOciArtifact[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifact">HealthcareFhirServiceOciArtifact</a>[]

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | HealthcareFhirServiceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts">HealthcareFhirServiceTimeouts</a>

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `accessPolicyObjectIds`<sup>Required</sup> <a name="accessPolicyObjectIds" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.accessPolicyObjectIds"></a>

```typescript
public readonly accessPolicyObjectIds: string[];
```

- *Type:* string[]

---

##### `configurationExportStorageAccountName`<sup>Required</sup> <a name="configurationExportStorageAccountName" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.configurationExportStorageAccountName"></a>

```typescript
public readonly configurationExportStorageAccountName: string;
```

- *Type:* string

---

##### `containerRegistryLoginServerUrl`<sup>Required</sup> <a name="containerRegistryLoginServerUrl" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.containerRegistryLoginServerUrl"></a>

```typescript
public readonly containerRegistryLoginServerUrl: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HealthcareFhirServiceAuthentication <a name="HealthcareFhirServiceAuthentication" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication.Initializer"></a>

```typescript
import { healthcareFhirService } from '@cdktf/provider-azurerm'

const healthcareFhirServiceAuthentication: healthcareFhirService.HealthcareFhirServiceAuthentication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication.property.audience">audience</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service#audience HealthcareFhirService#audience}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication.property.authority">authority</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service#authority HealthcareFhirService#authority}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication.property.smartProxyEnabled">smartProxyEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service#smart_proxy_enabled HealthcareFhirService#smart_proxy_enabled}. |

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication.property.audience"></a>

```typescript
public readonly audience: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service#audience HealthcareFhirService#audience}.

---

##### `authority`<sup>Required</sup> <a name="authority" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication.property.authority"></a>

```typescript
public readonly authority: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service#authority HealthcareFhirService#authority}.

---

##### `smartProxyEnabled`<sup>Optional</sup> <a name="smartProxyEnabled" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication.property.smartProxyEnabled"></a>

```typescript
public readonly smartProxyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service#smart_proxy_enabled HealthcareFhirService#smart_proxy_enabled}.

---

### HealthcareFhirServiceConfig <a name="HealthcareFhirServiceConfig" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.Initializer"></a>

```typescript
import { healthcareFhirService } from '@cdktf/provider-azurerm'

const healthcareFhirServiceConfig: healthcareFhirService.HealthcareFhirServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.authentication">authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication">HealthcareFhirServiceAuthentication</a></code> | authentication block. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service#location HealthcareFhirService#location}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service#name HealthcareFhirService#name}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service#resource_group_name HealthcareFhirService#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service#workspace_id HealthcareFhirService#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.accessPolicyObjectIds">accessPolicyObjectIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service#access_policy_object_ids HealthcareFhirService#access_policy_object_ids}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.configurationExportStorageAccountName">configurationExportStorageAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service#configuration_export_storage_account_name HealthcareFhirService#configuration_export_storage_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.containerRegistryLoginServerUrl">containerRegistryLoginServerUrl</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service#container_registry_login_server_url HealthcareFhirService#container_registry_login_server_url}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors">HealthcareFhirServiceCors</a></code> | cors block. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service#id HealthcareFhirService#id}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentity">HealthcareFhirServiceIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.kind">kind</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service#kind HealthcareFhirService#kind}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.ociArtifact">ociArtifact</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifact">HealthcareFhirServiceOciArtifact</a>[]</code> | oci_artifact block. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service#tags HealthcareFhirService#tags}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts">HealthcareFhirServiceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.authentication"></a>

```typescript
public readonly authentication: HealthcareFhirServiceAuthentication;
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication">HealthcareFhirServiceAuthentication</a>

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service#authentication HealthcareFhirService#authentication}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service#location HealthcareFhirService#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service#name HealthcareFhirService#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service#resource_group_name HealthcareFhirService#resource_group_name}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service#workspace_id HealthcareFhirService#workspace_id}.

---

##### `accessPolicyObjectIds`<sup>Optional</sup> <a name="accessPolicyObjectIds" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.accessPolicyObjectIds"></a>

```typescript
public readonly accessPolicyObjectIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service#access_policy_object_ids HealthcareFhirService#access_policy_object_ids}.

---

##### `configurationExportStorageAccountName`<sup>Optional</sup> <a name="configurationExportStorageAccountName" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.configurationExportStorageAccountName"></a>

```typescript
public readonly configurationExportStorageAccountName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service#configuration_export_storage_account_name HealthcareFhirService#configuration_export_storage_account_name}.

---

##### `containerRegistryLoginServerUrl`<sup>Optional</sup> <a name="containerRegistryLoginServerUrl" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.containerRegistryLoginServerUrl"></a>

```typescript
public readonly containerRegistryLoginServerUrl: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service#container_registry_login_server_url HealthcareFhirService#container_registry_login_server_url}.

---

##### `cors`<sup>Optional</sup> <a name="cors" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.cors"></a>

```typescript
public readonly cors: HealthcareFhirServiceCors;
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors">HealthcareFhirServiceCors</a>

cors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service#cors HealthcareFhirService#cors}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service#id HealthcareFhirService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.identity"></a>

```typescript
public readonly identity: HealthcareFhirServiceIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentity">HealthcareFhirServiceIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service#identity HealthcareFhirService#identity}

---

##### `kind`<sup>Optional</sup> <a name="kind" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service#kind HealthcareFhirService#kind}.

---

##### `ociArtifact`<sup>Optional</sup> <a name="ociArtifact" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.ociArtifact"></a>

```typescript
public readonly ociArtifact: IResolvable | HealthcareFhirServiceOciArtifact[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifact">HealthcareFhirServiceOciArtifact</a>[]

oci_artifact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service#oci_artifact HealthcareFhirService#oci_artifact}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service#tags HealthcareFhirService#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: HealthcareFhirServiceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts">HealthcareFhirServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service#timeouts HealthcareFhirService#timeouts}

---

### HealthcareFhirServiceCors <a name="HealthcareFhirServiceCors" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors.Initializer"></a>

```typescript
import { healthcareFhirService } from '@cdktf/provider-azurerm'

const healthcareFhirServiceCors: healthcareFhirService.HealthcareFhirServiceCors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors.property.allowedHeaders">allowedHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service#allowed_headers HealthcareFhirService#allowed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors.property.allowedMethods">allowedMethods</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service#allowed_methods HealthcareFhirService#allowed_methods}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors.property.allowedOrigins">allowedOrigins</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service#allowed_origins HealthcareFhirService#allowed_origins}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors.property.credentialsAllowed">credentialsAllowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service#credentials_allowed HealthcareFhirService#credentials_allowed}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors.property.maxAgeInSeconds">maxAgeInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service#max_age_in_seconds HealthcareFhirService#max_age_in_seconds}. |

---

##### `allowedHeaders`<sup>Required</sup> <a name="allowedHeaders" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors.property.allowedHeaders"></a>

```typescript
public readonly allowedHeaders: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service#allowed_headers HealthcareFhirService#allowed_headers}.

---

##### `allowedMethods`<sup>Required</sup> <a name="allowedMethods" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors.property.allowedMethods"></a>

```typescript
public readonly allowedMethods: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service#allowed_methods HealthcareFhirService#allowed_methods}.

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors.property.allowedOrigins"></a>

```typescript
public readonly allowedOrigins: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service#allowed_origins HealthcareFhirService#allowed_origins}.

---

##### `credentialsAllowed`<sup>Optional</sup> <a name="credentialsAllowed" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors.property.credentialsAllowed"></a>

```typescript
public readonly credentialsAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service#credentials_allowed HealthcareFhirService#credentials_allowed}.

---

##### `maxAgeInSeconds`<sup>Optional</sup> <a name="maxAgeInSeconds" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors.property.maxAgeInSeconds"></a>

```typescript
public readonly maxAgeInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service#max_age_in_seconds HealthcareFhirService#max_age_in_seconds}.

---

### HealthcareFhirServiceIdentity <a name="HealthcareFhirServiceIdentity" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentity.Initializer"></a>

```typescript
import { healthcareFhirService } from '@cdktf/provider-azurerm'

const healthcareFhirServiceIdentity: healthcareFhirService.HealthcareFhirServiceIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service#type HealthcareFhirService#type}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentity.property.identityIds">identityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service#identity_ids HealthcareFhirService#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service#type HealthcareFhirService#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentity.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service#identity_ids HealthcareFhirService#identity_ids}.

---

### HealthcareFhirServiceOciArtifact <a name="HealthcareFhirServiceOciArtifact" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifact.Initializer"></a>

```typescript
import { healthcareFhirService } from '@cdktf/provider-azurerm'

const healthcareFhirServiceOciArtifact: healthcareFhirService.HealthcareFhirServiceOciArtifact = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifact.property.loginServer">loginServer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service#login_server HealthcareFhirService#login_server}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifact.property.digest">digest</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service#digest HealthcareFhirService#digest}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifact.property.imageName">imageName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service#image_name HealthcareFhirService#image_name}. |

---

##### `loginServer`<sup>Required</sup> <a name="loginServer" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifact.property.loginServer"></a>

```typescript
public readonly loginServer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service#login_server HealthcareFhirService#login_server}.

---

##### `digest`<sup>Optional</sup> <a name="digest" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifact.property.digest"></a>

```typescript
public readonly digest: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service#digest HealthcareFhirService#digest}.

---

##### `imageName`<sup>Optional</sup> <a name="imageName" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifact.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service#image_name HealthcareFhirService#image_name}.

---

### HealthcareFhirServiceTimeouts <a name="HealthcareFhirServiceTimeouts" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts.Initializer"></a>

```typescript
import { healthcareFhirService } from '@cdktf/provider-azurerm'

const healthcareFhirServiceTimeouts: healthcareFhirService.HealthcareFhirServiceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service#create HealthcareFhirService#create}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service#delete HealthcareFhirService#delete}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service#read HealthcareFhirService#read}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service#update HealthcareFhirService#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service#create HealthcareFhirService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service#delete HealthcareFhirService#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service#read HealthcareFhirService#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/healthcare_fhir_service#update HealthcareFhirService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HealthcareFhirServiceAuthenticationOutputReference <a name="HealthcareFhirServiceAuthenticationOutputReference" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.Initializer"></a>

```typescript
import { healthcareFhirService } from '@cdktf/provider-azurerm'

new healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.resetSmartProxyEnabled">resetSmartProxyEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSmartProxyEnabled` <a name="resetSmartProxyEnabled" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.resetSmartProxyEnabled"></a>

```typescript
public resetSmartProxyEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.audienceInput">audienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.authorityInput">authorityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.smartProxyEnabledInput">smartProxyEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.audience">audience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.authority">authority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.smartProxyEnabled">smartProxyEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication">HealthcareFhirServiceAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `audienceInput`<sup>Optional</sup> <a name="audienceInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.audienceInput"></a>

```typescript
public readonly audienceInput: string;
```

- *Type:* string

---

##### `authorityInput`<sup>Optional</sup> <a name="authorityInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.authorityInput"></a>

```typescript
public readonly authorityInput: string;
```

- *Type:* string

---

##### `smartProxyEnabledInput`<sup>Optional</sup> <a name="smartProxyEnabledInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.smartProxyEnabledInput"></a>

```typescript
public readonly smartProxyEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.audience"></a>

```typescript
public readonly audience: string;
```

- *Type:* string

---

##### `authority`<sup>Required</sup> <a name="authority" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.authority"></a>

```typescript
public readonly authority: string;
```

- *Type:* string

---

##### `smartProxyEnabled`<sup>Required</sup> <a name="smartProxyEnabled" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.smartProxyEnabled"></a>

```typescript
public readonly smartProxyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HealthcareFhirServiceAuthentication;
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication">HealthcareFhirServiceAuthentication</a>

---


### HealthcareFhirServiceCorsOutputReference <a name="HealthcareFhirServiceCorsOutputReference" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.Initializer"></a>

```typescript
import { healthcareFhirService } from '@cdktf/provider-azurerm'

new healthcareFhirService.HealthcareFhirServiceCorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.resetCredentialsAllowed">resetCredentialsAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.resetMaxAgeInSeconds">resetMaxAgeInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCredentialsAllowed` <a name="resetCredentialsAllowed" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.resetCredentialsAllowed"></a>

```typescript
public resetCredentialsAllowed(): void
```

##### `resetMaxAgeInSeconds` <a name="resetMaxAgeInSeconds" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.resetMaxAgeInSeconds"></a>

```typescript
public resetMaxAgeInSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.allowedHeadersInput">allowedHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.allowedMethodsInput">allowedMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.allowedOriginsInput">allowedOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.credentialsAllowedInput">credentialsAllowedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.maxAgeInSecondsInput">maxAgeInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.allowedHeaders">allowedHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.allowedMethods">allowedMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.allowedOrigins">allowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.credentialsAllowed">credentialsAllowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.maxAgeInSeconds">maxAgeInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors">HealthcareFhirServiceCors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedHeadersInput`<sup>Optional</sup> <a name="allowedHeadersInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.allowedHeadersInput"></a>

```typescript
public readonly allowedHeadersInput: string[];
```

- *Type:* string[]

---

##### `allowedMethodsInput`<sup>Optional</sup> <a name="allowedMethodsInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.allowedMethodsInput"></a>

```typescript
public readonly allowedMethodsInput: string[];
```

- *Type:* string[]

---

##### `allowedOriginsInput`<sup>Optional</sup> <a name="allowedOriginsInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.allowedOriginsInput"></a>

```typescript
public readonly allowedOriginsInput: string[];
```

- *Type:* string[]

---

##### `credentialsAllowedInput`<sup>Optional</sup> <a name="credentialsAllowedInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.credentialsAllowedInput"></a>

```typescript
public readonly credentialsAllowedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxAgeInSecondsInput`<sup>Optional</sup> <a name="maxAgeInSecondsInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.maxAgeInSecondsInput"></a>

```typescript
public readonly maxAgeInSecondsInput: number;
```

- *Type:* number

---

##### `allowedHeaders`<sup>Required</sup> <a name="allowedHeaders" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.allowedHeaders"></a>

```typescript
public readonly allowedHeaders: string[];
```

- *Type:* string[]

---

##### `allowedMethods`<sup>Required</sup> <a name="allowedMethods" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.allowedMethods"></a>

```typescript
public readonly allowedMethods: string[];
```

- *Type:* string[]

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.allowedOrigins"></a>

```typescript
public readonly allowedOrigins: string[];
```

- *Type:* string[]

---

##### `credentialsAllowed`<sup>Required</sup> <a name="credentialsAllowed" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.credentialsAllowed"></a>

```typescript
public readonly credentialsAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxAgeInSeconds`<sup>Required</sup> <a name="maxAgeInSeconds" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.maxAgeInSeconds"></a>

```typescript
public readonly maxAgeInSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HealthcareFhirServiceCors;
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors">HealthcareFhirServiceCors</a>

---


### HealthcareFhirServiceIdentityOutputReference <a name="HealthcareFhirServiceIdentityOutputReference" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.Initializer"></a>

```typescript
import { healthcareFhirService } from '@cdktf/provider-azurerm'

new healthcareFhirService.HealthcareFhirServiceIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.resetIdentityIds"></a>

```typescript
public resetIdentityIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentity">HealthcareFhirServiceIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.identityIdsInput"></a>

```typescript
public readonly identityIdsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HealthcareFhirServiceIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentity">HealthcareFhirServiceIdentity</a>

---


### HealthcareFhirServiceOciArtifactList <a name="HealthcareFhirServiceOciArtifactList" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.Initializer"></a>

```typescript
import { healthcareFhirService } from '@cdktf/provider-azurerm'

new healthcareFhirService.HealthcareFhirServiceOciArtifactList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.get"></a>

```typescript
public get(index: number): HealthcareFhirServiceOciArtifactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifact">HealthcareFhirServiceOciArtifact</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HealthcareFhirServiceOciArtifact[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifact">HealthcareFhirServiceOciArtifact</a>[]

---


### HealthcareFhirServiceOciArtifactOutputReference <a name="HealthcareFhirServiceOciArtifactOutputReference" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.Initializer"></a>

```typescript
import { healthcareFhirService } from '@cdktf/provider-azurerm'

new healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.resetDigest">resetDigest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.resetImageName">resetImageName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDigest` <a name="resetDigest" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.resetDigest"></a>

```typescript
public resetDigest(): void
```

##### `resetImageName` <a name="resetImageName" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.resetImageName"></a>

```typescript
public resetImageName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.digestInput">digestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.imageNameInput">imageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.loginServerInput">loginServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.digest">digest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.imageName">imageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.loginServer">loginServer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifact">HealthcareFhirServiceOciArtifact</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `digestInput`<sup>Optional</sup> <a name="digestInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.digestInput"></a>

```typescript
public readonly digestInput: string;
```

- *Type:* string

---

##### `imageNameInput`<sup>Optional</sup> <a name="imageNameInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.imageNameInput"></a>

```typescript
public readonly imageNameInput: string;
```

- *Type:* string

---

##### `loginServerInput`<sup>Optional</sup> <a name="loginServerInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.loginServerInput"></a>

```typescript
public readonly loginServerInput: string;
```

- *Type:* string

---

##### `digest`<sup>Required</sup> <a name="digest" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.digest"></a>

```typescript
public readonly digest: string;
```

- *Type:* string

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

---

##### `loginServer`<sup>Required</sup> <a name="loginServer" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.loginServer"></a>

```typescript
public readonly loginServer: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HealthcareFhirServiceOciArtifact;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifact">HealthcareFhirServiceOciArtifact</a>

---


### HealthcareFhirServiceTimeoutsOutputReference <a name="HealthcareFhirServiceTimeoutsOutputReference" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.Initializer"></a>

```typescript
import { healthcareFhirService } from '@cdktf/provider-azurerm'

new healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts">HealthcareFhirServiceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HealthcareFhirServiceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts">HealthcareFhirServiceTimeouts</a>

---



